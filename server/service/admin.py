from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import Service


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    fields = ('title', 'description', 'image', 'image_tag',)
    readonly_fields = ('image_tag',)

    def image_tag(self, instance):
        return mark_safe(
            '<img style="max-height:400px;max-width:400px" src="{}"/>'
            .format(instance.image.url)
        )
    image_tag.short_description = 'Image Preview'
    image_tag.allow_tags = True
