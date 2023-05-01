from django.shortcuts import render, get_object_or_404
from .models import Person

# Create your views here.
def people_list(request):
    people = Person.objects.order_by('age')
    return render(request, 'app/people_list.html', {'people': people})


def person_detail(request, id):
    person = get_object_or_404(Person, id=id)
    return render(request, 'app/people_detail.html', {'person': person})

