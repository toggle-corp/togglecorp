from django.db import models


class Career(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    url = models.URLField(max_length=255, blank=True, null=True)
    image = models.FileField(upload_to='client/image/', blank=True, null=True)

    class Meta:
        ordering = ('id',)

    def __str__(self):
        return self.title
