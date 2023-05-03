from django.urls import path #path function
from . import views # . is shorthand for the current directory
from .views import get_by_number, get_by_name, add_person_view, search_by_number_view

# one urlpattern per line
urlpatterns = [
    path('', views.get_by_number, name='index'),
    path('add_person/', add_person_view, name='add-person'),
    path('search_num/', search_by_number_view, name='search-num'),
    path('<str:phone_number>/', get_by_number, name='get_by_number'),
    path('<str:name>/', get_by_name, name='get_by_name'),
    
]
