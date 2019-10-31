import datetime
from django.core.cache import cache
from django.dispatch import receiver
from django.db.models.signals import post_save

from client.models import Client
from member.models import Member
from service.models import Service
from technology.models import Technology

from .views import get_last_modified_key


def set_last_updated_at(sender, instance, created, **kwargs):
    """
    Signal to set last_updated_at which is used for caching
    """
    model_key = get_last_modified_key(sender)
    cache.set(model_key, datetime.datetime.now(), None)


receiver(post_save, sender=Client)(set_last_updated_at)
receiver(post_save, sender=Member)(set_last_updated_at)
receiver(post_save, sender=Service)(set_last_updated_at)
receiver(post_save, sender=Technology)(set_last_updated_at)
