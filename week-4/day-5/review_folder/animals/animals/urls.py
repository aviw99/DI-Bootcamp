from django.contrib import admin
from django.urls import path
from info.views import all_animals, animal, family


urlpatterns = [
    path('admin/', admin.site.urls),
    path('animals/', all_animals, name='animals_all'),
    path('animals/<int:id>', animal, name='animal_specific'),
    path('family/<int:id>', family, name='families_all')
]
