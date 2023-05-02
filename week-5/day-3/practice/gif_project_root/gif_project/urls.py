from django.contrib import admin
from django.urls import path
from gifs.views import homepage_view, add_gif_view, add_category_view, category_view, category_id_view, id_category_view, gif_view, gif_id_view, id_gif_view, likes_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('display_all/', homepage_view, name='display-all'),
    path('add_gif/', add_gif_view, name='add-gif'),
    path('add_category/', add_category_view, name='add-category'),

    path('category/', category_view, name='category-search'),
    path('category_id/<int:id>', category_id_view, name='category-by-id'),
    path('id_category/', id_category_view, name='id-category'),

    path('gif/', gif_view, name='gif-search'),
    path('gif_id/<int:id>', gif_id_view, name='gif-by-id'),
    path('id_gif/', id_gif_view, name='id-gif'),

    path('likes/', likes_view, name='likes-view')
]
