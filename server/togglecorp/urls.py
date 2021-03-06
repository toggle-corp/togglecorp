from django.contrib import admin
from django.urls import path
from django.conf.urls import static, url, include
from django.views.static import serve
from django.views.decorators.clickjacking import xframe_options_exempt
from django.conf import settings

from rest_framework import routers

from togglecorp import admin as tg_admin  # noqa: F401
from member.views import MemberViewSet
from client.views import ClientViewSet
from service.views import ServiceViewSet
from technology.views import TechnologySectionViewSet


router = routers.DefaultRouter()

router.register(r'members', MemberViewSet, base_name='member')
router.register(r'clients', ClientViewSet, base_name='client')
router.register(r'services', ServiceViewSet, base_name='service')
router.register(
    r'technology-sections',
    TechnologySectionViewSet,
    base_name='technology-section'
)


# Versioning : (v1|v2|v3)

API_PREFIX = r'^api/(?P<version>(v1))/'


def get_api_path(path):
    return '{}{}'.format(API_PREFIX, path)


urlpatterns = [
    url(r'^jet/', include('jet.urls', 'jet')),  # Django JET URLS
    url(r'^jet/dashboard/', include('jet.dashboard.urls', 'jet-dashboard')),  # Django JET dashboard URLS
    path('admin/', admin.site.urls),

    url(r'^api-auth/', include('rest_framework.urls',
                               namespace='rest_framework')),
    url(get_api_path(''), include(router.urls)),
] + static.static(
    settings.MEDIA_URL, view=xframe_options_exempt(serve),
    document_root=settings.MEDIA_ROOT)
