from django.conf import settings
from storages.backends.s3boto3 import S3Boto3Storage


class StaticStorage(S3Boto3Storage):
    location = settings.STATICFILES_LOCATION
    bucket_name = settings.AWS_STORAGE_BUCKET_NAME_STATIC
    querystring_auth = False

    # Don't use token provided by AWS environment (use custom defiend tokens)
    def _get_security_token(self):
        return None


class MediaStorage(S3Boto3Storage):
    location = settings.MEDIAFILES_LOCATION
    bucket_name = settings.AWS_STORAGE_BUCKET_NAME_MEDIA

    # Don't use token provided by AWS environment (use custom defiend tokens)
    def _get_security_token(self):
        return None
