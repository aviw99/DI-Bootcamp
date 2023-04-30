from django.contrib import admin
from django.urls import path
# from films import views
from films.views import addFilm, addDirector, homepage

urlpatterns = [
    path('admin/', admin.site.urls),
    path('homepage/', homepage.as_view(),name='homepage'),
    path('addFilm', addFilm.as_view(), name='add_film'),
    path('addDirector', addDirector.as_view(), name='add_director')
]
