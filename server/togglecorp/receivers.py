from django.core.cache import cache
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.utils import timezone

from client.models import Client
from career.models import Career
from member.models import Member, MemberUrlType, MemberUrl
from service.models import Service
from technology.models import Technology, TechnologySection

from .views import get_last_modified_key


def set_last_updated_at(sender, *args, **kwargs):
    """
    Signal to set last_updated_at which is used for caching
    """
    model_key = get_last_modified_key(sender)
    cache.set(model_key, timezone.now(), None)


def set_last_updated_at_member(sender, *args, **kwargs):
    set_last_updated_at(Member)


def set_last_updated_at_technology(sender, *args, **kwargs):
    set_last_updated_at(TechnologySection)


# Register receivers
for func, models in [
        (
            set_last_updated_at, [
                Client, Service, Career,
            ]
        ),
        (
            set_last_updated_at_member, [
                Member, MemberUrl, MemberUrlType,
            ]
        ),
        (
            set_last_updated_at_technology, [
                Technology, TechnologySection,
            ]
        ),
]:
    for model in models:
        receiver(post_save, sender=model)(func)
