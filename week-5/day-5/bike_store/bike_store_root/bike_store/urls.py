from django.contrib import admin
from django.urls import path
from rental_app.views import display_rental, display_rental_by_id, add_rental

urlpatterns = [
    path('admin/', admin.site.urls),
    path('rent/rental/', display_rental),
    path('rent/rental/<int:id>', display_rental_by_id),
    path('add_rental/', add_rental),
]
