from django.contrib import admin
from django.urls import include, path
# from django.conf.urls import url
# from django.contrib.auth import views

urlpatterns = [
    path('admin/', admin.site.urls),
    # url(r'^accounts/login/$', views.LoginView.as_view(), name='login'),
    # url(r'^accounts/logout/$', views.LogoutView.as_view(), name='logout'),
    # url(r'^accounts/password_change/$', views.PasswordChangeView.as_view(), name='password_change'),
]
