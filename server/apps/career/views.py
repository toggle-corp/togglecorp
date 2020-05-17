from rest_framework import viewsets

from togglecorp.views import CacheListMixin
from .models import Career
from .serializers import CareerSerializer


class CareerViewSet(CacheListMixin, viewsets.ModelViewSet):
    queryset = Career.objects.all()
    serializer_class = CareerSerializer
