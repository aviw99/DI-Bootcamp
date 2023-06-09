from typing import Any
from django.db.models.query import QuerySet
from django.shortcuts import render
from django.views import generic
from .models import Director, Film, Category
from .forms import AddDirectorForm, AddFilmForm, AddCategoryForm
from django.urls import reverse_lazy
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

class updateDirector(generic.UpdateView):
    template_name = 'director/updateDirector.html'
    model = Director
    form_class = AddDirectorForm
    success_url = reverse_lazy("homepage")

class addCategory(generic.CreateView):
    template_name = 'category/addCategory.html'
    model = Category
    form_class = AddCategoryForm
    success_url = reverse_lazy("homepage")

class updateFilm(generic.UpdateView):
    template_name = 'film/updateFilm.html'
    model = Film
    form_class = AddFilmForm
    success_url = reverse_lazy("homepage")
