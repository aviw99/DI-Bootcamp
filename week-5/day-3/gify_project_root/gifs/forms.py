from django import forms
from .models import Gif, Category

class GifForm(forms.ModelForm):
    class Meta:
        model = Gif
        fields = ('uploader_name','title','url')
    uploader_name = forms.CharField(label='uploader name', max_length=50)
    title = forms.CharField(label='gif title', max_length=50)
    url = forms.URLField(required=True)
    categories = forms.ModelMultipleChoiceField(queryset=Category.objects.all(),widget=forms.CheckboxSelectMultiple,label='Categories')

class CategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = '__all__'
    # name = forms.CharField(label='new category', max_length=50)

class Likes(forms.Form):
    gif = forms.ModelChoiceField(queryset=Gif.objects.all(), widget=forms.HiddenInput())
    like = forms.BooleanField(required=False, widget=forms.HiddenInput())
    # dislike = forms.BooleanField()