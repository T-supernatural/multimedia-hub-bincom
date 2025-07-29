from .views import MediaViewSet, verify_email
from rest_framework.routers import DefaultRouter
from django.urls import path, include
from . import views

router = DefaultRouter()
router.register(r'media', MediaViewSet, basename='media')

urlpatterns = [
    path('categories/', views.CategoryList.as_view(), name='category-list'),
    path('verify-email/', verify_email, name='verify_email'),
    path('contact/', views.contact_message_view, name='contact-message'),
    path('', include(router.urls)),
]
