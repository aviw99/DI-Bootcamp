from django.contrib import admin
from .models import GifModel, CategoryModel

# Register your models here
admin.site.register(GifModel)
admin.site.register(CategoryModel)