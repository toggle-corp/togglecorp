from django.db import models


class Client(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=255, blank=True, null=True)
    url = models.URLField(max_length=255)
    image = models.FileField(upload_to='client/image/')

    def __str__(self):
        return self.name
