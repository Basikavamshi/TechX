from django.db import models

# Create your models here.
from django.db import models


# ------------------------------------------------
# BASE MODEL (COMMON FIELDS FOR ALL TABLES)
# ------------------------------------------------

class BaseModel(models.Model):

    id = models.BigAutoField(primary_key=True)

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    is_active = models.BooleanField(default=True)

    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        abstract = True


# CATEGORY

class Category(BaseModel):

    name = models.CharField(max_length=100)

    description = models.TextField(blank=True)

    def __str__(self):
        return self.name


# BRAND

class Brand(BaseModel):

    name = models.CharField(max_length=150)

    country = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.name

# PRODUCT

class Product(BaseModel):

    name = models.CharField(max_length=200)

    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)

    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    price = models.DecimalField(max_digits=10, decimal_places=2)

    release_date = models.DateField(null=True, blank=True)

    description = models.TextField()

    def __str__(self):
        return self.name


# ------------------------------------------------
# PRODUCT IMAGES (MULTIPLE IMAGES)
# ------------------------------------------------

class ProductImage(BaseModel):

    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        related_name="images"
    )

    image = models.ImageField(upload_to="products/",null=True,blank=True)
    image_url=models.URLField(null=True,blank=True)
    def __str__(self):
        return f"{self.product.name} Image"


# ------------------------------------------------
# SPECIFICATION TYPES
# ------------------------------------------------

class SpecificationType(BaseModel):

    name = models.CharField(max_length=100)

    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


# ------------------------------------------------
# PRODUCT SPECIFICATIONS
# ------------------------------------------------

class ProductSpecification(BaseModel):

    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        related_name="specifications"
    )

    spec_type = models.ForeignKey(
        SpecificationType,
        on_delete=models.CASCADE
    )

    value = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.product.name} - {self.spec_type.name}"


# ------------------------------------------------
# PRODUCT REVIEWS
# ------------------------------------------------

class ProductReview(BaseModel):

    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        related_name="reviews"
    )

    rating = models.FloatField()

    review_text = models.TextField()

    def __str__(self):
        return f"Review - {self.product.name}"


# ------------------------------------------------
# LANGUAGE
# ------------------------------------------------

class Language(BaseModel):

    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


# ------------------------------------------------
# PRODUCT VIDEOS
# ------------------------------------------------

class ProductVideo(BaseModel):

    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        related_name="videos"
    )

    language = models.ForeignKey(
        Language,
        on_delete=models.SET_NULL,
        null=True
    )

    youtube_link = models.URLField()

    channel_name = models.CharField(max_length=200)

    video_title = models.CharField(max_length=200)

    def __str__(self):
        return f"Video - {self.product.name}"


# ------------------------------------------------
# PRODUCT SCORES
# ------------------------------------------------

class ProductScore(BaseModel):

    product = models.OneToOneField(
        Product,
        on_delete=models.CASCADE,
        related_name="score"
    )

    camera = models.FloatField(default=0)

    battery = models.FloatField(default=0)

    performance = models.FloatField(default=0)

    display = models.FloatField(default=0)

    design = models.FloatField(default=0)

    value_for_money = models.FloatField(default=0)

    overall_score = models.FloatField(default=0)

    def save(self, *args, **kwargs):

        scores = [
            self.camera,
            self.battery,
            self.performance,
            self.display,
            self.design,
            self.value_for_money
        ]

        self.overall_score = sum(scores) / len(scores)

        super().save(*args, **kwargs)

    def __str__(self):
        return f"Score - {self.product.name}"


# ------------------------------------------------
# TAGS
# ------------------------------------------------

class Tag(BaseModel):

    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class ProductTag(BaseModel):

    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.product.name} - {self.tag.name}"


# ------------------------------------------------
# HIGHLIGHTS (BEST PHONES, TRENDING, ETC.)
# ------------------------------------------------

class Highlight(BaseModel):

    title = models.CharField(max_length=200)

    description = models.TextField(blank=True)

    def __str__(self):
        return self.title


class HighlightProduct(BaseModel):

    highlight = models.ForeignKey(Highlight, on_delete=models.CASCADE)

    product = models.ForeignKey(Product, on_delete=models.CASCADE)


# ------------------------------------------------
# PRODUCT ANALYTICS
# ------------------------------------------------

class ProductAnalytics(BaseModel):

    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    views = models.IntegerField(default=0)

    weekly_views = models.IntegerField(default=0)

    monthly_views = models.IntegerField(default=0)

    clicks = models.IntegerField(default=0)


# ------------------------------------------------
# NEWS
# ------------------------------------------------

class News(BaseModel):

    title = models.CharField(max_length=300)

    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    author = models.CharField(max_length=100)

    content = models.TextField()

    publish_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


# ------------------------------------------------
# NEWS IMAGES
# ------------------------------------------------

class NewsImage(BaseModel):

    news = models.ForeignKey(
        News,
        on_delete=models.CASCADE,
        related_name="images"
    )

    image = models.ImageField(upload_to="news/")

    caption = models.CharField(max_length=200, blank=True)


# ------------------------------------------------
# NEWS TAGS
# ------------------------------------------------

class NewsTag(BaseModel):

    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class NewsTagMap(BaseModel):

    news = models.ForeignKey(News, on_delete=models.CASCADE)

    tag = models.ForeignKey(NewsTag, on_delete=models.CASCADE)


# ------------------------------------------------
# PRODUCT COMPARISON HISTORY
# ------------------------------------------------

class ComparisonHistory(BaseModel):

    product1 = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        related_name="compare_product1"
    )

    product2 = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        related_name="compare_product2"
    )

    product3 = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="compare_product3"
    )