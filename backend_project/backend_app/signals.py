from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Product
from .utils import index_product

@receiver(post_save, sender=Product)
def sync_product(sender, instance, **kwargs):
    index_product(instance)