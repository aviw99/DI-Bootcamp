from django.shortcuts import render
from django.http import HttpRequest
import json
from .models import Animal, Family

# Create your views here.
def read_data(location: str, key: str):
    with open(location, 'r')as file:
        data = json.load(file)
    sub_data = data[key]
    return sub_data

def find_instance(data_list: list, id):
    for instance in data_list:
        if instance['id'] == id:
            return instance
    return None

def all_animals(request):
    animals_list = Animal.objects.all()
    context = {'animals': animals_list}
    return render(request, 'animals.html', context)

def animal(request: HttpRequest, id: int):
    animal_instance = Animal.objects.get(id=id)
    context = {'animal': animal_instance}
    return render(request, 'animal.html', context)

def family(request: HttpRequest, id: int):
    families = read_data('data.json', 'families')
    instance = find_instance(families, id)
    context = {'family': instance}
    return render(request, 'family.html', context)


