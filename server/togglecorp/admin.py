from django.contrib import admin
from django.utils.translation import ugettext_lazy


site = admin.site
# Text to put at the end of each page's <title>.
site.site_title = ugettext_lazy('Togglecorp admin')
# Text to put in each page's <h1> (and above login form).
site.site_header = ugettext_lazy('Togglecorp administration')
# Text to put at the top of the admin index page.
site.index_title = ugettext_lazy('Togglecorp administration')
