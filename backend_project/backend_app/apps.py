from django.apps import AppConfig


class BackendAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'backend_app'


class ProductsConfig(AppConfig):
    name = 'products'

    def ready(self):
        import backend_app.signals