from django.db import models

# Create your models here.

class Family(models.Model):
    # id is automatically created
    name = models.CharField(max_length=50) # varchar in sql


class Animal(models.Model):
    # id is automatically created
    name = models.CharField(max_length=50)
    legs = models.IntegerField()
    weight = models.FloatField()
    height = models.FloatField()
    speed = models.FloatField()
    family = models.ForeignKey(Family, on_delete=models.SET_NULL, null=True)
    image = models.URLField(blank=True, null=True)


