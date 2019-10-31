import datetime
from django.core.cache import cache
from django.dispatch import receiver
from django.db.models.signals import post_save

from client.models import Client
from member.models import Member, MemberUrlType, MemberUrl
from service.models import Service
from technology.models import Technology, TechnologySection

from .views import get_last_modified_key


def set_last_updated_at(sender, instance, created, **kwargs):
    """
    Signal to set last_updated_at which is used for caching
    """
    model_key = get_last_modified_key(sender)
    cache.set(model_key, datetime.datetime.now(), None)


receiver(post_save, sender=Client)(set_last_updated_at)
receiver(post_save, sender=Service)(set_last_updated_at)


def set_last_updated_at_member(sender, instance, created, **kwargs):
    """
    Signal to set last_updated_at which is used for caching
    """
    model_key = get_last_modified_key(Member)
    cache.set(model_key, datetime.datetime.now(), None)


receiver(post_save, sender=Member)(set_last_updated_at_member)
receiver(post_save, sender=MemberUrl)(set_last_updated_at_member)
receiver(post_save, sender=MemberUrlType)(set_last_updated_at_member)


def set_last_updated_at_technology(sender, instance, created, **kwargs):
    """
    Signal to set last_updated_at which is used for caching
    """
    model_key = get_last_modified_key(TechnologySection)
    cache.set(model_key, datetime.datetime.now(), None)


receiver(post_save, sender=TechnologySection)(set_last_updated_at_technology)
receiver(post_save, sender=Technology)(set_last_updated_at_technology)
