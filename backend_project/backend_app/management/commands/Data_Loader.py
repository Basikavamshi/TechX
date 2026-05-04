from django.core.management.base import BaseCommand
from backend_app.models import Product, Brand,Category,ProductImage,SpecificationType,ProductSpecification
import json
from decimal import Decimal
class Command(BaseCommand):

    def handle(self, *args, **kwargs):

        with open(r"E:\Btech_Projects\techxnew\webscraping\mobile_data.json","r") as json_data:
            data=json.loads(json_data.read())['data']
            specs=["Processor","Display","Camera","Battery","Ram"]
            for i in data:
                
                products=Product.objects.get(name=i['title'])
                k=0
                for j in i['specs']:
                    specs_type=SpecificationType.objects.get(name=specs[k])
                    k+=1
                    ProductSpecification.objects.create(
                        product=products,
                        spec_type=specs_type,
                        value=j
                    )



                



        print("Data inserted successfully")