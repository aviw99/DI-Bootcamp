from django import forms
from .models import GifModel, CategoryModel

class GifForm(forms.ModelForm):
    categories = forms.ModelMultipleChoiceField(queryset=CategoryModel.objects.all())

    class Meta:
        model = GifModel
        fields = ['uploader_name', 'title', 'url', 'categories']
        


class CategoryForm(forms.ModelForm):
    class Meta:
        model = CategoryModel
        fields = ['name']