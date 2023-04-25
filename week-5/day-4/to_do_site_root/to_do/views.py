from django.shortcuts import render
from django.http import HttpResponse
from .models import Category, Todo
from .forms import todo_form

# Create your views here.
def todo_view(request):
    if request.method == 'POST':
        form_filled = todo_form(request.POST)
        
        if form_filled.is_valid():
            title = form_filled.cleaned_data['title']
            details = form_filled.cleaned_data['details']
            deadline_date = form_filled.cleaned_data['deadline_date']
            category = form_filled.cleaned_data['category']
    
            Todo.objects.create(
                title=title,
                details=details,
                deadline_date=deadline_date,
                category=category
            )
            
    context = {'form': todo_form}
    return render(request, 'todo.html', context)

def display_todos(request):
    todo_all = Todo.objects.all()
    context = {'todo_list': todo_all}
    return render (request, 'view_todos.html', context)










    # todo_list = Todo.objects.all()

    


