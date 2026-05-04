from rest_framework.serializers import ModelSerializer,SerializerMethodField
from rest_framework import serializers
from .models import Product,ProductSpecification,ProductImage,SpecificationType

class SpecTypeSerilaizer(ModelSerializer):
    class Meta:
        model=SpecificationType
        fields="__all__"


class SpecSerilaizer(ModelSerializer):
   
    class Meta:
        model=ProductSpecification
        fields=["value"]
class ProductImageSerializer(ModelSerializer):
    class Meta:
        model=ProductImage
        fields=['image_url']

class ProductSerializer(ModelSerializer):
    
    specs=serializers.SerializerMethodField()
    img=serializers.SerializerMethodField()
    brand_name=serializers.CharField(source='brand.name')
    class Meta:
        model=Product
        fields='__all__'

    def get_specs(self,obj):
        
        return [spec.value for spec in obj.specifications.all()]
    def get_img(self,obj):
        return [img.image_url for img in obj.images.all()]
    
    
                
               
        
        

    
