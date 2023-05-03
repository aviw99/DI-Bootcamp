from django.shortcuts import render, redirect
from django.http import HttpResponse 
from .models import Person
from .forms import add_person_form, search_by_number_form

# Create your views here.
def get_by_number(request, phone_number: str):
    persons = Person.objects.filter(phone_number=phone_number)
    return render(request, 'all_by_number.html', {'persons': persons})

def get_by_name(request, name: str):
    persons = Person.objects.filter(name=name)
    return render(request, 'all_by_name.html', {'persons': persons})

def add_person_view(request):
    form = add_person_form()
    context = {'form': form}
    if request.method == 'GET':
        return render(request, 'add_person.html', context)
    elif request.method == 'POST':
        form = add_person_form(request.POST)
        if form.is_valid():
            form.save()
            return render(request, 'add_person.html', context)


def search_by_number_view(request):
    form = search_by_number_form()
    context = {'form': form}
    if request.method == 'GET':
        return render(request, 'search_by_num.html', context)
    elif request.method == 'POST':
        form = search_by_number_form(request.POST)
        if form.is_valid():
            phone_number = form.cleaned_data['phone_number']
            people = Person.objects.filter(phone_number=phone_number)
            return render(request, 'search_results.html', {'people': people})


 
    