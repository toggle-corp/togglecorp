from rest_framework import serializers

from .models import Member, MemberUrl, MemberUrlType


class MemberUrlTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = MemberUrlType
        fields = '__all__'


class MemberUrlSerializer(serializers.ModelSerializer):
    type = MemberUrlTypeSerializer()

    class Meta:
        model = MemberUrl
        fields = '__all__'


class MemberSerializer(serializers.ModelSerializer):
    members_urls = MemberUrlSerializer(many=True)

    class Meta:
        model = Member
        fields = '__all__'
