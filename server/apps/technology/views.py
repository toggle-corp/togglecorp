from rest_framework import viewsets

from togglecorp.views import CacheListMixin
from .models import TechnologySection
from .serializers import TechnologySectionSerializer


class TechnologySectionViewSet(CacheListMixin, viewsets.ReadOnlyModelViewSet):
    serializer_class = TechnologySectionSerializer

    def get_queryset(self):
        return TechnologySection.objects.prefetch_related('technologies').all()
