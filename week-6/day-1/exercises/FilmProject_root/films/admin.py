from django.contrib import admin
from films.models import Country, Category, Film, Director
# Register your models here.
admin.site.register(Category)
admin.site.register(Country)
admin.site.register(Film)
admin.site.register(Director)