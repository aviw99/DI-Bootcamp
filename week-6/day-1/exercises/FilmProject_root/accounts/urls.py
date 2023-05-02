from django.urls import path
from django.contrib.auth.views import LoginView, LogoutView
from .views import ProfileView, SignUpView

urlpatterns = [
    path('signup/', SignUpView.as_view(template_name='signup.html'), name='signup'),
    path('login/', LoginView.as_view(template_name='login.html'), name='login'),
    path('logout/', LogoutView.as_view(template_name='logout.html'), name='logout'),
    path('profile/<int:pk>', ProfileView.as_view(template_name='profile.html'), name='profile-page'),
]