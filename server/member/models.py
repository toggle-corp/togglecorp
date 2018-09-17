from django.db import models


class MemberUrlType(models.Model):
    name = models.CharField(max_length=255, unique=True)
    icon = models.FileField(
        upload_to='member/url-icon/', blank=True, null=True,
    )

    def __str__(self):
        return self.name


class Member(models.Model):
    name = models.CharField(max_length=255)
    image = models.FileField(upload_to='member/image/')
    designation = models.CharField(max_length=255)

    def __str__(self):
        return '{} ({})'.format(self.name, self.designation)


class MemberUrl(models.Model):
    url = models.URLField(max_length=255)
    type = models.ForeignKey(
        MemberUrlType, on_delete=models.CASCADE, related_name='urls',
    )
    member = models.ForeignKey(
        Member, on_delete=models.CASCADE, related_name='members_urls',
    )

    def __str__(self):
        return '({}): {}'.format(self.type.name, self.url)
