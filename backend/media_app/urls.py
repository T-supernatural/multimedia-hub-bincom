from .views import MediaViewSet
from rest_framework.routers import DefaultRouter
from django.urls import path
from . import views

urlpatterns = [
    path('media/', views.MediaList.as_view(), name='media-list'),
    path('media/<int:pk>/', views.MediaDetail.as_view(), name='media-detail'),
    path('categories/', views.CategoryList.as_view(), name='category-list'),
]


router = DefaultRouter()
router.register(r'media', MediaViewSet, basename='media')

urlpatterns = router.urls
