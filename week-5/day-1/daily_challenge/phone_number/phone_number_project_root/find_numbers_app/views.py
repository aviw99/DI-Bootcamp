from django.shortcuts import render
from django.http import HttpResponse 
from .models import Person
from .forms import add_person_form

# Create your views here.
def get_by_number(request, phone_number: str):
    persons = Person.objects.filter(phone_number=phone_number)
    return render(request, 'all_by_number.html', {'persons': persons})

def get_by_name(request, name: str):
    persons = Person.objects.filter(name=name)
    return render(request, 'all_by_name.html', {'persons': persons})

def add_person(request):
    form = add_person_form()

    if request.methhod == 'POST':
        filled_form = add_person_form(request.POST)

        if filled_form.is_valid():
            filled_form.save()
            return HttpResponse('saved')
        else:
            return HttpResponse('filled_form')
        
    if request.method == 'GET':
        context = {'form': form}
        return render(request, 'add_person.html', context)