from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import Member, MemberUrl, MemberUrlType


class MemberUrlInline(admin.TabularInline):
    model = MemberUrl


@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    inlines = (MemberUrlInline,)
    list_display = ('name', 'designation', 'hidden')
    fields = ('name', 'image', 'image_tag', 'designation', 'hidden')
    list_filter = ('designation', 'hidden',)
    readonly_fields = ('image_tag',)

    def image_tag(self, instance):
        return mark_safe(
            '<img style="max-height:400px;max-width:400px" src="{}"/>'
            .format(instance.image.url)
        )
    image_tag.short_description = 'Image Preview'
    image_tag.allow_tags = True


@admin.register(MemberUrlType)
class MemberUrlTypeAdmin(admin.ModelAdmin):
    fields = ('name', 'icon', 'icon_tag')
    readonly_fields = ('icon_tag',)

    def icon_tag(self, instance):
        return mark_safe(
            '<img style="max-height:400px;max-width:400px" src="{}"/>'
            .format(instance.icon.url)
        )
    icon_tag.short_description = 'Icon Preview'
    icon_tag.allow_tags = True
