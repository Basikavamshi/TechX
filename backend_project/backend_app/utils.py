from .elasticsearch_client import es
from .models import Product
import re
from word2number import w2n
from elasticsearch import Elasticsearch, helpers

def index_product(product):

    images=list(product.images.all().values_list('image_url', flat=True))
    specs=list(product.specifications.all().values_list('value', flat=True))
    print(f"Indexing Product: {product.brand.name} with {len(images)} images and {len(specs)} specs")
    es.index(
        index="products",
        id=product.id,
        document={
            "id": product.id,
            "name": product.name,
            "brand": product.brand.name,
            "price": float(product.price),
            "img": images,
            "specs": specs
        }
    )



def bulk_index():
    for product in Product.objects.prefetch_related('images', 'specifications').all():
        index_product(product)
def update_es():
 for product in Product.objects.all():
    es.update(
        index="products",
        id=product.id,
        doc={
            "category": product.category.name
        }
    )


def convert_words_to_numbers(text):
    words = text.split()
    new_words = []

    for word in words:
        try:
            num = w2n.word_to_num(word)
            new_words.append(str(num))
        except:
            new_words.append(word)

    return " ".join(new_words)

def extracting_query_params(query):
    raw_query=query
    query=query.lower()
    query=convert_words_to_numbers(query)
    filters={}

    clean_query=query

    under=re.search(r'(under|below)\s*(\d+)', query)

    if under:
        filters['price__lte']=int(under.group(2))
        clean_query=query.replace(under.group(0),'')

    above=re.search(r'(above|over)\s*(\d+)', query)

    if above:
        filters['price__gte']=int(above.group(2))
        clean_query=clean_query.replace(above.group(0),'')
    
    between=re.search(r'between\s*(\d+)\s*and\s*(\d+)', query)

    if between:
        filters['price__gte']=int(between.group(1))
        filters['price__lte']=int(between.group(2))
        clean_query=clean_query.replace(between.group(0),'')
    
    year=re.search(r'20\d{2}',query)

    if year:
        filters['year']=int(year.group())
        clean_query=clean_query.replace(year.group(),'')

    clean_query=re.sub(r'(phone|phones)', 'mobiles', clean_query)

    print(clean_query)

    
    



    return clean_query,filters



def generate_suggestions():
    data = []

    categories = {
        "mobile": [10000, 20000, 30000, 50000],
        "laptop": [30000, 50000, 80000, 100000]
    }

    features = ["camera", "gaming", "battery"]
    intents = ["best", "latest", "trending"]

    for category, prices in categories.items():

        # 🔹 Price suggestions
        for price in prices:
            data.append({
                "_index": "search_suggestions",
                "_source": {
                    "query": f"{category} under {price}",
                    "category": category,
                    "popularity": 1
                }
            })

            data.append({
                "_index": "search_suggestions",
                "_source": {
                    "query": f"{category} above {price}",
                    "category": category,
                    "popularity": 1
                }
            })

        # 🔹 Feature suggestions
        for feature in features:
            data.append({
                "_index": "search_suggestions",
                "_source": {
                    "query": f"{category} with good {feature}",
                    "category": category,
                    "popularity": 1
                }
            })

        # 🔹 Intent suggestions
        for intent in intents:
            data.append({
                "_index": "search_suggestions",
                "_source": {
                    "query": f"{intent} {category}",
                    "category": category,
                    "popularity": 1
                }
            })

    return data


def push_bulk():
    actions = generate_suggestions()
    helpers.bulk(es, actions)
    print("Suggestions pushed 🚀")


