class ProductFilter:
    def __init__(self, queryset, brand_name=None, feature_name=None, min_price=None, max_price=None, tags=None):
        self.queryset = queryset
        self.brand_name = brand_name
        self.feature_name = feature_name
        self.min_price = min_price
        self.max_price = max_price
        self.tags = tags

    def apply_filter(self):
        if self.brand_name:
            self.queryset = self.queryset.filter(brand__name=self.brand_name)
        if self.feature_name:
            self.queryset = self.queryset.filter(specifications__name=self.feature_name)
        if self.min_price is not None:
            self.queryset = self.queryset.filter(price__gte=self.min_price)
        if self.max_price is not None:
            self.queryset = self.queryset.filter(price__lte=self.max_price)
        if self.tags:
            self.queryset = self.queryset.filter(tags__name=self.tags)
        return self.queryset
            