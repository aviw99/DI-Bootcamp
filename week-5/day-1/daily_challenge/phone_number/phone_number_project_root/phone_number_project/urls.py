from django.contrib import admin
from django.urls import include, path
from find_numbers_app.views import add_person


urlpatterns = [
    path('admin/', admin.site.urls),
    path('<str:phone_number>/', include('find_numbers_app.urls')), # include the urls.py from the polls application
    path('<str:name>/', include('find_numbers_app.urls')),
    path('add_person/', add_person),
]
