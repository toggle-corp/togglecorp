from rest_framework import viewsets

from togglecorp.views import CacheListMixin
from .models import Member
from .serializers import MemberSerializer


class MemberViewSet(CacheListMixin, viewsets.ReadOnlyModelViewSet):
    serializer_class = MemberSerializer

    def get_queryset(self):
        return Member.objects.prefetch_related(
            'members_urls', 'members_urls__type',
        ).filter(hidden=False)
