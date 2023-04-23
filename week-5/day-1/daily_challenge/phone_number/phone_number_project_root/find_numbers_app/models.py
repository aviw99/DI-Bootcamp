from django.db import models
from phone_field import PhoneField
# Create your models here.

class Person(models.Model):
    name = models.CharField (max_length=50)                                   #(String)
    email =   models.EmailField ()                               #(String, unique)
    phone_number = PhoneField(blank=True, help_text='Contact phone number')                                #(PhoneNumberField)
    address = models.CharField (max_length=100)                                 #(String)

    def __str__(self) -> str:
        return self.name
    

