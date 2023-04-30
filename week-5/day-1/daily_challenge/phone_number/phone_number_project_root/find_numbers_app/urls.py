from django.urls import path #path function
from . import views # . is shorthand for the current directory
from .views import get_by_number, get_by_name, add_person

# one urlpattern per line
urlpatterns = [
    path('', views.get_by_number, name='index'),
    path('<str:phone_number>/', get_by_number, name='get_by_number'),
    path('<str:name>/', get_by_name, name='get_by_name'),
    path('add_person/', add_person),
]
# '' : empty string and /
# views.index : index function in views.py
# name='index' : name of the route