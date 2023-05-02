from django.shortcuts import render, redirect
from django.urls import reverse
from .models import GifModel, CategoryModel
from .forms import GifForm, CategoryForm

# Create your views here.
def homepage_view(request):
    gifs = GifModel.objects.all()
    context = {'gifs': gifs}
    return render(request, 'app/display_gifs.html', context)

def add_gif_view(request):
    if request.method == 'POST':
        form = GifForm(request.POST)
        if form.is_valid():
            form.save()
            form = GifForm()
            return render(request, 'app/add_gif.html', {'form': form})
    else:
        form = GifForm()
    context = {'form': form}
    return render(request, 'app/add_gif.html', context)

def add_category_view(request):
    if request.method == 'POST':
        form = CategoryForm(request.POST)
        if form.is_valid():
            form.save()
            form = CategoryForm
            return render(request, 'app/add_category', {'form': form})
    else:
        form = CategoryForm()
    context = {'form': form}
    return render(request, 'app/add_category', context)

def category_view(request):
    categories = CategoryModel.objects.all()
    context = {'categories': categories}
    return render(request, 'app/category.html', context)

def category_id_view(request, id):
    category = CategoryModel.objects.get(id=id)
    context = {'category': category}
    return render(request, 'app/category_by_id.html', context)

def id_category_view(request):
    if request.method == 'POST':
        category_id = request.POST['category_id']
        return redirect(reverse('category-by-id', args=[category_id]))
    else:
        return render(request, 'app/id_category.html')
    
def gif_view(request):
    gifs = GifModel.objects.all()
    context = {'gifs': gifs}
    return render(request, 'app/gif.html', context)

def gif_id_view(request, id):
    gif = GifModel.objects.get(id=id)
    context = {'gif': gif}
    if request.method == 'POST':
        if 'like' in request.POST:
            gif.likes += 1
            gif.save()
        elif 'dislike' in request.POST:
            gif.likes -= 1
            gif.save()
    return render(request, 'app/gif_by_id.html', context)

def id_gif_view(request):
    if request.method == 'POST':
        gif_id = request.POST['gif_id']
        return redirect(reverse('gif-by-id', args=[gif_id]))
    else:
        return render(request, 'app/id_gif.html')
    
def likes_view(request):
    likes = GifModel.objects.all()
    liked = likes.order_by('-likes')
    context = {'liked': liked}
    return render(request, 'app/likes.html', context)