from os.path import join as path_join

from django.core.management.base import BaseCommand
from django.core.management import call_command
from django.core.files import File
from django.conf import settings

from service.models import Service


FIXTURE_IMAGE_PATH = path_join(settings.BASE_DIR, 'service/fixtures/images/')


class Command(BaseCommand):
    help = 'Load Initial Services'

    def handle(self, *args, **options):
        call_command('loaddata', 'initial_services.json', app_label='service')
        for service in Service.objects.all():
            image_name = service.image.name.split('/')[-1]
            image_path = path_join(FIXTURE_IMAGE_PATH, image_name)
            with open(image_path, 'rb') as image:
                service.image.save(image_name, File(image))
                self.stdout.write(
                    self.style.SUCCESS(
                        'Successfully service "{}"'.format(service.title)
                    )
                )
