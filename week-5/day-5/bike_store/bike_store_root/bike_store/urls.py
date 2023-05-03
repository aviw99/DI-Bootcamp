from django.contrib import admin
from django.urls import path
from rental_app.views import display_rental, display_rental_by_id, add_rental, customer_by_id_view, customers_view, add_customer, all_vehicles_view, vehicle_by_id_view, add_vehicle_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('rent/rental/', display_rental),
    path('rent/rental/<int:id>', display_rental_by_id),
    path('rent/rental/add/', add_rental),
    path('rent/customer/<int:id>', customer_by_id_view),
    path('rent/customer/', customers_view),
    path('rent/customer/add/', add_customer),
    path('rent/vehicle/', all_vehicles_view),
    path('rent/vehicle/<int:id>', vehicle_by_id_view),
    path('rent/vehicle/add/', add_vehicle_view),
]
