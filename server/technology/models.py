from django.db import models


class TechnologySection(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name


class Technology(models.Model):
    name = models.CharField(max_length=255)
    url = models.URLField(max_length=255)
    section = models.ForeignKey(
        TechnologySection, on_delete=models.CASCADE,
        related_name='technologies',
    )
    image = models.FileField(upload_to='technology/image/')

    def __str__(self):
        return self.name
