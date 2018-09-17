from rest_framework import serializers

from .models import Technology, TechnologySection


class TechnologyInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = ('id', 'name', 'url', 'image',)


class TechnologySectionSerializer(serializers.ModelSerializer):
    technologies = TechnologyInfoSerializer(many=True)

    class Meta:
        model = TechnologySection
        fields = '__all__'


class TechnologySerializer(serializers.ModelSerializer):
    section_name = serializers.CharField(source='section.name')

    class Meta:
        model = Technology
        fields = '__all__'
