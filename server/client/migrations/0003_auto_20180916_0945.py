# Generated by Django 2.1 on 2018-09-16 09:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('client', '0002_client_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='description',
            field=models.TextField(blank=True, max_length=255, null=True),
        ),
    ]