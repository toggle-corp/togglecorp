from rest_framework import viewsets

from .models import Technology, TechnologySection
from .serializers import TechnologySerializer, TechnologySectionSerializer


class TechnologySectionViewSet(viewsets.ModelViewSet):
    queryset = TechnologySection.objects.all()
    serializer_class = TechnologySectionSerializer


class TechnologyViewSet(viewsets.ModelViewSet):
    queryset = Technology.objects.all()
    serializer_class = TechnologySerializer
