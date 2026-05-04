from elasticsearch import Elasticsearch

es=Elasticsearch(hosts=["http://localhost:9200"])
def create_index():
    es.indices.create(
        index="products",
        body={
            "mappings": {
                "properties": {
                    "id": {"type": "integer"},
                    "name": {"type": "text"},
                    "brand": {"type": "keyword"},
                    "price": {"type": "float"},
                    "img": {"type": "keyword"},
                    "specs": {"type": "text"}
                }
            }
        },
        ignore=400
    )

    print("Index created 🚀")


