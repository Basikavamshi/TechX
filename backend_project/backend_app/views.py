from django.shortcuts import render
from rest_framework import mixins, viewsets
from django.http import HttpResponse
from .models import Product,ProductSpecification
from .serializers import ProductSerializer,SpecSerilaizer
from .pagination import CustomPagination
from django.db.models import Q
from rest_framework.filters import SearchFilter,OrderingFilter
from .ProductFilter import ProductFilter
from rest_framework.views import APIView
from rest_framework.response import Response
from .elasticsearch_client import es
from .utils import extracting_query_params
# Create your views here.



class Products_Template(viewsets.ReadOnlyModelViewSet):
    queryset=Product.objects.all()
    serializer_class=ProductSerializer
    pagination_class=CustomPagination
    filter_backends=[SearchFilter,OrderingFilter]
    search_fields=['name','brand__name']
    ordering_fields=['name','price']
    ordering = ['-price']
    def get_queryset(self):
        data=Product.objects.all()
        brand_name=self.request.query_params.get('brand')
        feature_name=self.request.query_params.get('feature')
        min_price=self.request.query_params.get('min_price')
        max_price=self.request.query_params.get('max_price')
        tags=self.request.query_params.get('tags')
        product_filter=ProductFilter(data, brand_name, feature_name, min_price, max_price, tags)
        return product_filter.apply_filter()
        



class ProductSearchView(APIView):
    def get(self, request):
        search = request.GET.get("search", "")
        search_after = request.GET.getlist("search_after")
        brand = request.GET.getlist("brand")

        min_price = request.GET.get("min_price")
        max_price = request.GET.get("max_price")
        sort = request.GET.get("sort", "price_asc")

        must_query = []
        filter_query = []

        # 🔥 NLP
        clean_query, filters = extracting_query_params(search)

        if clean_query:
            search = clean_query

        if filters:
            min_price = filters.get("price__gte", min_price)
            max_price = filters.get("price__lte", max_price)

        # 🔍 Search
        if search:
            must_query.append({
                "multi_match": {
                    "query": search,
                    "fields": ["name^3", "brand", "category"],
                    "fuzziness": "AUTO"
                }
            })
        else:
            must_query.append({"match_all": {}})

        # 🎯 Brand filter
        if brand:
            filter_query.append({
                "terms": {"brand.keyword": brand}
            })

        # 💰 Price filter
        if min_price or max_price:
            range_filter = {}
            if min_price:
                range_filter["gte"] = int(min_price)
            if max_price:
                range_filter["lte"] = int(max_price)

            filter_query.append({
                "range": {"price": range_filter}
            })

        # 🔽 Sorting
        sort_config = [
            {"_score": "desc"},
            {"price": "asc"},
            {"id": "asc"}
        ]

        if sort == "price_desc":
            sort_config = [{"price": "desc"}, {"id": "asc"}]

        elif sort == "name_asc":
            sort_config = [{"name.keyword": "asc"}, {"id": "asc"}]

        elif sort == "name_desc":
            sort_config = [{"name.keyword": "desc"}, {"id": "asc"}]

        body = {
            "size": 20,
            "query": {
                "bool": {
                    "must": must_query,
                    "filter": filter_query
                }
            },
            "sort": sort_config
        }

        # 🔁 Cursor pagination
        if search_after:
            body["search_after"] = search_after

        res = es.search(index="products", body=body)

        results = []
        last_sort = None

        for hit in res["hits"]["hits"]:
            results.append(hit["_source"])
            last_sort = hit["sort"]

        return Response({
            "results": results,
            "next_cursor": last_sort
        })

class SearchSuggestion(APIView):

    def get(self, request):
        search_query = request.GET.get("search", "").strip()

        if not search_query:
            return Response({"results": []})

        clean_query, filters = extracting_query_params(search_query)

        suggestions = []
        seen = set()

        # ==============================
        # 🔹 1. PRODUCT SUGGESTIONS
        # ==============================
        product_body = {
            "size": 5,
            "_source": ["name","price","img"],
            "query": {
                "bool": {
                    "should": [
                        {
                            "match_phrase_prefix": {
                                "name": {
                                    "query": search_query,
                                    "boost": 3
                                }
                            }
                        },
                        {
                            "multi_match": {
                                "query": search_query,
                                "fields": ["name^2", "brand"],
                                "fuzziness": "AUTO"
                            }
                        }
                    ]
                }
            }
        }

        product_res = es.search(index="products", body=product_body)
        print(product_res)

        for hit in product_res["hits"]["hits"]:
            print(hit)
            name = hit["_source"]["name"]

            price=hit["_source"]["price"]

            img=hit["_source"]["img"][0] if hit["_source"]["img"] else None

            if name not in seen:
                suggestions.append({
                    "type": "product",
                    "value": name,
                    "price": price,
                    "img": img
                })
                seen.add(name)

        # ==============================
        # 🔹 2. STORED QUERY SUGGESTIONS
        # ==============================
        suggestion_body = {
            "size": 5,
            "_source": ["query"],
            "query": {
                "match_phrase_prefix": {
                    "query": clean_query or search_query
                }
            },
            "sort": [
                {"popularity": "desc"}
            ]
        }

        suggestion_res = es.search(index="search_suggestions", body=suggestion_body)

        for hit in suggestion_res["hits"]["hits"]:
            query_text = hit["_source"]["query"]

            if query_text not in seen:
                suggestions.append({
                    "type": "query",
                    "value": query_text
                })
                seen.add(query_text)

        # ==============================
        # 🔹 3. (OPTIONAL) DYNAMIC SUGGESTIONS
        # ==============================
        # only if needed (early typing)
        if len(search_query) <= 5:
            PRICE_BUCKETS = [10000, 20000]

            base_query = clean_query or search_query

            for price in PRICE_BUCKETS:
                text = f"{base_query} under {price}"

                if text not in seen:
                    suggestions.append({
                        "type": "query",
                        "value": text
                    })
                    seen.add(text)

        # ==============================
        # 🔹 FINAL LIMIT
        # ==============================
        suggestions = suggestions[:10]

        return Response({
            "results": suggestions
        })