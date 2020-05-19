import hashlib
from django.core.cache import cache
from django.utils.decorators import method_decorator
from django.views.decorators.http import condition
from django.utils import timezone


def get_last_modified_key(model):
    return f'{model.objects.model._meta.db_table}__last_modified'


def last_modified_func(request, *args, **kwargs):
    model = request.resolver_match.func.cls.serializer_class.Meta.model
    model_key = get_last_modified_key(model)
    last_modified = cache.get(model_key)
    if not last_modified:
        last_modified = timezone.now()
        cache.set(model_key, last_modified, None)
    return last_modified


def etag_func(*args, **kwargs):
    hash = hashlib.sha1()
    hash.update(str(last_modified_func(*args, **kwargs)).encode())
    return hash.hexdigest()


class CacheListMixin():
    @method_decorator(condition(etag_func=etag_func, last_modified_func=last_modified_func))
    def list(self, *args, **kwargs):
        return super().list(*args, **kwargs)
