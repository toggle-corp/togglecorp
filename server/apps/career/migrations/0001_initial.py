# Generated by Django 2.2.6 on 2020-05-13 11:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Career',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField(max_length=255)),
                ('url', models.URLField(blank=True, max_length=255, null=True)),
                ('image', models.FileField(blank=True, null=True, upload_to='client/image/')),
            ],
            options={
                'ordering': ('id',),
            },
        ),
    ]
