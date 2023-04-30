from django.contrib import admin
from django.urls import path
# from films import views
from films.views import addFilm, addDirector, homepage, addCategory, updateDirector, updateFilm

urlpatterns = [
    path('admin/', admin.site.urls),
    path('homepage/', homepage.as_view(),name='homepage'),
    path('addFilm', addFilm.as_view(), name='add_film'),
    path('addDirector', addDirector.as_view(), name='add_director'),
    path('updateDirector/<int:pk>', updateDirector.as_view(), name='update_director'),
    path('addCategory', addCategory.as_view(), name = 'add_category'),
    path('updateFilm/<int:pk>', updateFilm.as_view(), name='update_film'),
]
