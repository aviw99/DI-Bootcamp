from django.shortcuts import render, redirect
from .models import Customer, Rental, RentalRate, Vehicle, VehicleSize, VehicleType
from .forms import RentalForm, CustomerForm, VehicleForm
from django.http import HttpResponse

# Create your views here.
def display_rental(request):
    rental_all = Rental.objects.all().order_by('-return_date')
    context = {'rental_list': rental_all}
    return render(request, 'view_rental.html', context)

def display_rental_by_id(request, id:id):
    instance = Rental.objects.get(id=id)
    context = {'rental': instance}
    return render(request, 'view_by_id.html', context)

def add_rental(request):
    
    form = RentalForm()
    context = {'form': form}

    if request.method == 'GET':    
        return render(request, "add_rental.html", context)
    
    elif request.method == 'POST':
        filled_form = RentalForm(request.POST)
        if filled_form.is_valid():
            rental = filled_form.save(commit=False)
            if rental.vehicle.rental_set.filter(return_date__isnull=False):
                form = RentalForm()
                return render(request, "unavailable.html", {'form': form})
            else:
                rental.save()
                return render(request, "add_rental.html", {'form': form})

def customer_by_id_view(request, id:id):
    customer = Customer.objects.get(id=id)
    context = {'customer': customer }
    return render(request, 'customer_by_id.html', context)

def customers_view(request):
    all_customers = Customer.objects.all().order_by('first_name')
    context = {'all_customers': all_customers}
    return render(request, 'view_customers.html', context)

def add_customer(request):
    form = CustomerForm()
    context = {'form': form}
    
    if request.method == 'GET':
        return render(request, "add_customer.html", context)
           
    elif request.method == 'POST':
        filled_form = CustomerForm(request.POST)
        if filled_form.is_valid():
            filled_form.save()
            return render(request, "add_customer.html", context)      

def all_vehicles_view(request):
    all_vehicles = Vehicle.objects.all().order_by('vehicle_type')
    context = {'all_vehicles': all_vehicles}
    return render(request, 'view_vehicles.html', context)

def vehicle_by_id_view(request, id:id):
    vehicle = Vehicle.objects.get(id=id)
    context = {'vehicle': vehicle }
    return render(request, 'vehicle_by_id.html', context)

def add_vehicle_view(request):
    form = VehicleForm()
    context = {'form': form}
    
    if request.method == 'GET':
        return render(request, "add_vehicle.html", context)
           
    elif request.method == 'POST':
        filled_form = VehicleForm(request.POST)
        if filled_form.is_valid():
            filled_form.save()
            return render(request, "add_vehicle.html", context)    
