from django.shortcuts import render
from rest_framework import generics
from .models import Media, Category
from .serializers import MediaSerializer, CategorySerializer


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

