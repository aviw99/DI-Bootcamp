from django import forms
from django.contrib.auth.models import User


class SignUpForm(forms.ModelForm):

    class Meta():
        model = User
        fields = ['Username', 'First_name', 'Last_name', 'Password1', 'Password2']



class LoginForm(forms.ModelForm):
    
    class Meta():
        model = User
        fields = ['Username', 'Password']