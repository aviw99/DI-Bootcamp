from django.contrib import admin
from django.urls import path, include
from polls.views import PostCreateView, PostListView, PostView, PostUpdateView

urlpatterns = [
    path("admin/", admin.site.urls),
    path('polls/', include('polls.urls')),
    
    path("accounts/", include('accounts.urls')),
]
