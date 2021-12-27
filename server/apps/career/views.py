from rest_framework import viewsets

from togglecorp.views import CacheListMixin
from .models import Career
from .serializers import CareerSerializer


class CareerViewSet(CacheListMixin, viewsets.ReadOnlyModelViewSet):
    serializer_class = CareerSerializer

    def get_queryset(self):
        return Career.objects.filter(hidden=False)
