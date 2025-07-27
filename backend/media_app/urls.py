from .views import MediaViewSet, verify_email
from rest_framework.routers import DefaultRouter
from django.urls import path, include
from . import views

router = DefaultRouter()
router.register(r'media', MediaViewSet, basename='media')

urlpatterns = [
    path('media/', views.MediaList.as_view(), name='media-list'),
    path('media/<int:pk>/', views.MediaDetail.as_view(), name='media-detail'),
    path('categories/', views.CategoryList.as_view(), name='category-list'),
    path('verify-email/', verify_email, name='verify_email'),
    path('', include(router.urls)),
]
