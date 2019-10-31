from rest_framework import viewsets

from togglecorp.views import CacheListMixin
from .models import Client
from .serializers import ClientSerializer


class ClientViewSet(CacheListMixin, viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
