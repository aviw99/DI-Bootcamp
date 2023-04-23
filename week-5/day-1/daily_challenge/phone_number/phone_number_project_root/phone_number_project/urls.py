from django.contrib import admin
from django.urls import include, path


urlpatterns = [
    path('admin/', admin.site.urls),
    path('<str:phone_number>/', include('find_numbers_app.urls')), # include the urls.py from the polls application
    path('<str:name>/', include('find_numbers_app.urls')),
]
