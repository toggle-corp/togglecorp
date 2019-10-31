from rest_framework import viewsets

from togglecorp.views import CacheListMixin
from .models import Technology, TechnologySection
from .serializers import TechnologySerializer, TechnologySectionSerializer


class TechnologySectionViewSet(CacheListMixin, viewsets.ModelViewSet):
    serializer_class = TechnologySectionSerializer

    def get_queryset(self):
        return TechnologySection.objects.prefetch_related('technologies').all()


class TechnologyViewSet(CacheListMixin, viewsets.ModelViewSet):
    queryset = Technology.objects.all()
    serializer_class = TechnologySerializer
