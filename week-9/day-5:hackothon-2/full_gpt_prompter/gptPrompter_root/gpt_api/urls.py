from django.urls import path
from .views import handle_data_view


urlpatterns = [
    path('openai/generate/', handle_data_view, name='generate-prompt'),
]
