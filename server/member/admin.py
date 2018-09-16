from django.contrib import admin

from .models import Member, MemberUrl, MemberUrlType


class MemberUrlInline(admin.TabularInline):
    model = MemberUrl


@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    inlines = (MemberUrlInline,)


@admin.register(MemberUrlType)
class MemberTypeAdmin(admin.ModelAdmin):
    pass
