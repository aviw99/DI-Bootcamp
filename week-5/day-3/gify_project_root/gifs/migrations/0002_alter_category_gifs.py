# Generated by Django 4.2 on 2023-04-25 07:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gifs', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='gifs',
            field=models.ManyToManyField(blank=True, to='gifs.gif'),
        ),
    ]
