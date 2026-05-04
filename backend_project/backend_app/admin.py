
from django.contrib import admin
from .models import *


# ------------------------------------------------
# PRODUCT RELATED INLINES
# ------------------------------------------------
class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1


class ProductSpecificationInline(admin.TabularInline):
    model = ProductSpecification
    extra = 1



class ProductVideoInline(admin.TabularInline):
    model = ProductVideo
    extra = 1


# ------------------------------------------------
# PRODUCT ADMIN
# ------------------------------------------------

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "brand",
        "category",
        "price",
        "is_active",
        "created_at"
    )

    list_filter = (
        "brand",
        "category",
        "is_active"
    )

    search_fields = ("name",)

    inlines = [
        ProductImageInline,
        ProductSpecificationInline,
        ProductVideoInline
    ]


# ------------------------------------------------
# CATEGORY ADMIN
# ------------------------------------------------

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):

    list_display = ("name", "created_at")

    search_fields = ("name",)


# ------------------------------------------------
# BRAND ADMIN
# ------------------------------------------------

@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):

    list_display = ("name", "country", "created_at")

    search_fields = ("name",)


# ------------------------------------------------
# SPECIFICATION TYPE ADMIN
# ------------------------------------------------

@admin.register(SpecificationType)
class SpecificationTypeAdmin(admin.ModelAdmin):

    list_display = ("name", "category")

    list_filter = ("category",)


# ------------------------------------------------
# PRODUCT SCORE ADMIN
# ------------------------------------------------

@admin.register(ProductScore)
class ProductScoreAdmin(admin.ModelAdmin):

    list_display = (
        "product",
        "camera",
        "battery",
        "performance",
        "display",
        "overall_score"
    )


# ------------------------------------------------
# TAG ADMIN
# ------------------------------------------------

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):

    list_display = ("name",)

    search_fields = ("name",)


@admin.register(ProductTag)
class ProductTagAdmin(admin.ModelAdmin):

    list_display = ("product", "tag")

    list_filter = ("tag",)


# ------------------------------------------------
# HIGHLIGHT ADMIN
# ------------------------------------------------

@admin.register(Highlight)
class HighlightAdmin(admin.ModelAdmin):

    list_display = ("title",)


@admin.register(HighlightProduct)
class HighlightProductAdmin(admin.ModelAdmin):

    list_display = ("highlight", "product")


# ------------------------------------------------
# PRODUCT ANALYTICS ADMIN
# ------------------------------------------------

@admin.register(ProductAnalytics)
class ProductAnalyticsAdmin(admin.ModelAdmin):

    list_display = (
        "product",
        "views",
        "weekly_views",
        "monthly_views",
        "clicks"
    )


# ------------------------------------------------
# LANGUAGE ADMIN
# ------------------------------------------------

@admin.register(Language)
class LanguageAdmin(admin.ModelAdmin):

    list_display = ("name",)


# ------------------------------------------------
# NEWS RELATED INLINES
# ------------------------------------------------

class NewsImageInline(admin.TabularInline):
    model = NewsImage
    extra = 1


# ------------------------------------------------
# NEWS ADMIN
# ------------------------------------------------

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):

    list_display = (
        "title",
        "category",
        "author",
        "publish_date"
    )

    list_filter = ("category",)

    search_fields = ("title",)

    inlines = [NewsImageInline]


# ------------------------------------------------
# NEWS TAG ADMIN
# ------------------------------------------------

@admin.register(NewsTag)
class NewsTagAdmin(admin.ModelAdmin):

    list_display = ("name",)


@admin.register(NewsTagMap)
class NewsTagMapAdmin(admin.ModelAdmin):

    list_display = ("news", "tag")


# ------------------------------------------------
# PRODUCT COMPARISON ADMIN
# ------------------------------------------------

@admin.register(ComparisonHistory)
class ComparisonHistoryAdmin(admin.ModelAdmin):

    list_display = (
        "product1",
        "product2",
        "product3",
        "created_at"
    )