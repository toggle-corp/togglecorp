from os.path import join as path_join

from django.core.management.base import BaseCommand
from django.core.management import call_command
from django.core.files import File
from django.conf import settings

from client.models import Client


FIXTURE_IMAGE_PATH = path_join(settings.BASE_DIR, 'client/fixtures/images/')


class Command(BaseCommand):
    help = 'Load Initial Clients'

    def handle(self, *args, **options):
        call_command('loaddata', 'initial_clients.json', app_label='client')
        for client in Client.objects.all():
            image_name = client.image.path.split('/')[-1]
            image_path = path_join(FIXTURE_IMAGE_PATH, image_name)
            with open(image_path, 'rb') as image:
                client.image.save(image_name, File(image))
                self.stdout.write(
                    self.style.SUCCESS(
                        'Successfully client "{}"'.format(client.name)
                    )
                )
