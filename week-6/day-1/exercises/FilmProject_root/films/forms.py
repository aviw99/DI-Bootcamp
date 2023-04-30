from django import forms
from .models import Director, Film, Category

class AddFilmForm(forms.ModelForm):
    class Meta():
        model=Film
        fields='__all__'
        widgets = {'category': forms.CheckboxSelectMultiple}

class AddDirectorForm(forms.ModelForm):
    class Meta():
        model=Director
        fields='__all__'

class AddCategoryForm(forms.ModelForm):
    class Meta():
        model=Category
        fields = '__all__'
