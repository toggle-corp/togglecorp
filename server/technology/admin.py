from django.contrib import admin

from .models import Technology, TechnologySection


@admin.register(TechnologySection)
class TechnologySectionAdmin(admin.ModelAdmin):
    pass


@admin.register(Technology)
class TechnologyAdmin(admin.ModelAdmin):
    pass
