from django.contrib import admin
from django.urls import path
from gifs.views import homepage_view, add_gif, add_category

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', homepage_view),
    path('add_gif/', add_gif),
    path('add_category/', add_category),
]
