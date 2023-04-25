from django.urls import path
from . import views

urlpatterns = [
    path('', views.todo_view, name='add_todo'),
    path('display/', views.display_todos, name='view_all'),
]