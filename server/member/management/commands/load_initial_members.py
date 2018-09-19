from os.path import join as path_join

from django.core.management.base import BaseCommand
from django.core.management import call_command
from django.core.files import File
from django.conf import settings

from member.models import Member


FIXTURE_IMAGE_PATH = path_join(settings.BASE_DIR, 'member/fixtures/images/')


class Command(BaseCommand):
    help = 'Load Initial Members'

    def handle(self, *args, **options):
        call_command('loaddata', 'initial_members.json', app_label='member')
        for member in Member.objects.all():
            image_name = member.image.name.split('/')[-1]
            image_path = path_join(FIXTURE_IMAGE_PATH, image_name)
            with open(image_path, 'rb') as image:
                member.image.save(image_name, File(image))
                self.stdout.write(
                    self.style.SUCCESS(
                        'Successfully member "{}"'.format(member.name)
                    )
                )
