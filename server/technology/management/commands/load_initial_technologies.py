from os.path import join as path_join

from django.core.management.base import BaseCommand
from django.core.management import call_command
from django.core.files import File
from django.conf import settings

from technology.models import Technology


FIXTURE_IMAGE_PATH = path_join(
    settings.BASE_DIR,
    'technology/fixtures/images/',
)


class Command(BaseCommand):
    help = 'Load Initial Technologies'

    def handle(self, *args, **options):
        call_command(
            'loaddata',
            'initial_technologies.json',
            app_label='technology'
        )
        for technology in Technology.objects.all():
            image_name = technology.image.path.split('/')[-1]
            image_path = path_join(FIXTURE_IMAGE_PATH, image_name)
            with open(image_path, 'rb') as image:
                technology.image.save(image_name, File(image))
                self.stdout.write(
                    self.style.SUCCESS(
                        'Successfully technology "{}"'.format(technology.name)
                    )
                )
