# Generated by Django 2.1 on 2019-05-10 06:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('member', '0006_member_hide'),
    ]

    operations = [
        migrations.RenameField(
            model_name='member',
            old_name='hide',
            new_name='hidden',
        ),
    ]