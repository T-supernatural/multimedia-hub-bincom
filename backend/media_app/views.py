from django.shortcuts import render
from rest_framework import generics
from .models import Media, Category
from .serializers import MediaSerializer, CategorySerializer
from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend

class MediaList(generics.ListAPIView):
    queryset = Media.objects.filter(
        is_published=True).order_by('-publish_date')
    serializer_class = MediaSerializer


class MediaDetail(generics.RetrieveAPIView):
    queryset = Media.objects.filter(is_published=True)
    serializer_class = MediaSerializer


class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class MediaViewSet(viewsets.ModelViewSet):
    queryset = Media.objects.all()
    serializer_class = MediaSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['media_type']
    search_fields = ['title', 'description']
