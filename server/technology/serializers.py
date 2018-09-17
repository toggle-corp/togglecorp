from rest_framework import serializers

from .models import Technology, TechnologySection


class TechnologySectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TechnologySection
        fields = '__all__'


class TechnologySerializer(serializers.ModelSerializer):
    section = TechnologySectionSerializer()

    class Meta:
        model = Technology
        fields = '__all__'
