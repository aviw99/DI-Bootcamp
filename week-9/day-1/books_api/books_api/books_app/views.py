from django.shortcuts import render, redirect
from rest_framework import generics
from .models import Book
from .serializers import BookSerializer


# Create your views here.
class BookList(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


class BookDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


def Book_Create(request):
    if request.method == 'POST':
        serializer = BookSerializer(data=request.POST)
        if serializer.is_valid():
            serializer.save()
            return redirect('book-list')
    else:
        serializer = BookSerializer()
    return render(request, 'book_create.html', {'serializer': serializer})


def Book_Update(request, pk):
    book = Book.objects.get(pk-pk)
    if request.method == 'POST':
        serializer = BookSerializer(instance=book, data=request.POST)
    if serializer.is_valid():
        serializer.save()
        return redirect('book-list')
    else:
        serializer = BookSerializer(instance=book)
    return render(request, 'book_update.html', {'serializer': serializer, 'book': book})


def Book_Delete(request, pk):
    book = Book.objects.get(pk=pk)
    if request.method == 'POST':
        book.delete()
        return redirect('book-list')
    return render(request, 'book_delete.html', {'book': book})
