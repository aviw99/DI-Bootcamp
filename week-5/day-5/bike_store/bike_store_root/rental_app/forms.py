from django import forms
from .models import Rental, RentalRate, Vehicle, VehicleSize,VehicleType, Customer

class RentalForm(forms.ModelForm):
    class Meta:
        model = Rental
        fields = '__all__'

class CustomerForm(forms.ModelForm):
    class Meta:
        model = Customer
        fields = '__all__'

class VehicleForm(forms.ModelForm):
    class Meta:
        model = Vehicle
        fields = '__all__'