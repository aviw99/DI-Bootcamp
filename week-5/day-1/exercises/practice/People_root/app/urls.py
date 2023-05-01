from django.urls import path
from . import views

urlpatterns = [
    path('people/', views.people_list, name='people-list'),
    path('people/<int:id>', views.person_detail, name='person-detail'),
]