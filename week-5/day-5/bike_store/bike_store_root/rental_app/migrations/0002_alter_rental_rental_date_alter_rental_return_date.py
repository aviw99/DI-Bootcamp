# Generated by Django 4.2 on 2023-04-27 12:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rental_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rental',
            name='rental_date',
            field=models.DateField(null=True),
        ),
        migrations.AlterField(
            model_name='rental',
            name='return_date',
            field=models.DateField(null=True),
        ),
    ]
