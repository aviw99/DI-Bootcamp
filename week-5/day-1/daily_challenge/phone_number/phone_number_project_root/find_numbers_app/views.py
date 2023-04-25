from django.shortcuts import render
from django.http import HttpResponse 
from .models import Person


# Create your views here.
def get_by_number(request, phone_number: str):
    persons = Person.objects.filter(phone_number=phone_number)
    return render(request, 'all_by_number.html', {'persons': persons})

def get_by_name(request, name: str):
    persons = Person.objects.filter(name=name)
    return render(request, 'all_by_name.html', {'persons': persons})

