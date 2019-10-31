from rest_framework import viewsets

from togglecorp.views import CacheListMixin
from .models import Service
from .serializers import ServiceSerializer


class ServiceViewSet(CacheListMixin, viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
