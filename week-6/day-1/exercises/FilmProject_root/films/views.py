from typing import Any
from django.db.models.query import QuerySet
from django.shortcuts import render
from django.views import generic
from .models import Director, Film
from .forms import AddDirectorForm, AddFilmForm
from django.urls import reverse_lazy
# Create your views here.
# def homepage(request):
#     return render(request, 'homepage.html')

class homepage(generic.ListView):
    template_name = 'homepage.html'
    context_object_name = 'films'

    def get_queryset(self) -> QuerySet[Any]:
        return Film.objects.all()

class addFilm(generic.CreateView):
    template_name = 'film/addFilm.html'
    model = Film
    form_class = AddFilmForm
    success_url = reverse_lazy("homepage")

class addDirector(generic.CreateView):
    template_name = 'director/addDirector.html'
    model = Director
    form_class = AddDirectorForm
    success_url = reverse_lazy("homepage")