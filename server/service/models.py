from django.db import models


class Service(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.FileField(upload_to='service/image/')

    class Meta:
        ordering = ('id',)

    def __str__(self):
        return self.title
