from django.urls import path
from .views import BookList, BookDetail, Book_Create, Book_Delete, Book_Update

urlpatterns = [
    path('books/', BookList.as_view(), name="book-detail"),
    path('books/<int:pk>', BookDetail.as_view(), name="book-detail"),
    path('books/create-post/', Book_Create, name='book-create'),
    path('books/delete/<int:pk>', Book_Delete, name='book-delete'),
    path('books/update/<int:pk>', Book_Update, name='book-update')
]