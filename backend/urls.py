from django.contrib import admin
from django.urls import path, re_path, include
from api import views
from django.conf import settings
from django.views.generic import TemplateView
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('authentication.urls')),
    re_path(r'^api/recipes/$', views.recipes_list),
    re_path(r'^api/recipes/([0-9])', views.recipe_detail),
    path('', include('frontend.urls')),
    path(r'^.*&', TemplateView.as_view(template_name="index.html")),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
