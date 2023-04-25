from django.shortcuts import render
from django.http import HttpResponse
from .models import Gif, Category
from .forms import GifForm, CategoryForm, Likes

# Create your views here.

def homepage_view(request):
    gifs_list = Gif.objects.all()
    forms = [Likes(initial={'gif': gif_inct}) for gif_inct in gifs_list]
    gifs_forms = list(zip(gifs_list, forms))
    context = {'gifs_forms': gifs_forms}
    return render(request, "view_all.html", context)
    # gif_form = GifForm()
    # cat_form = CategoryForm()
    # gifs = Gif.objects.all()
    # context = {'gifs':gifs, 'gif_form': gif_form, 'cat_form': cat_form}
    # return render(request, 'homepage.html', context)


def add_gif(request):
    if request.method == 'POST':
        gif_filled_form = GifForm(request.POST)

        if gif_filled_form.is_valid():
            gif_filled_form.save()
            return HttpResponse('successfully saved')
        
    if request.method == 'GET':
        gif_form = GifForm()
        context = {'form': gif_form}

    return render(request, 'add_gif.html', context)
    

def add_category(request):
    if request.method == 'POST':
        category_filled_form = CategoryForm(request.POST)

        if category_filled_form.is_valid():
            category_filled_form.save()
            return HttpResponse('successfully saved')
        
    if request.method == 'GET':
        category_form = CategoryForm()
        context = {'form': category_form}

    return render(request, 'add_category.html', context)
    