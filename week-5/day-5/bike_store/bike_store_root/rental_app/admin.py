from django.contrib import admin
from .models import Customer, Rental, RentalRate, Vehicle, VehicleSize, VehicleType
# Register your models here.

admin.site.register(Vehicle)
admin.site.register(VehicleSize)
admin.site.register(VehicleType)
admin.site.register(Rental)
admin.site.register(RentalRate)
admin.site.register(Customer)