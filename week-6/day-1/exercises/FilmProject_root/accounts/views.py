from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.forms import UserCreationForm
from django.views.generic import DetailView, CreateView
from django.urls import reverse_lazy
from .models import UserProfile

# Create your views here.

class ProfileView(DetailView):
    model = UserProfile
    template_name = 'profile.html'
    context_object_name = 'profile'


class SignUpView(CreateView):
    form_class = UserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'signup.html'

def create_profile_view(request):
    user = request.user
    form = UserCreationForm(initial={'user': user})

