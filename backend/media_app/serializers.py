from rest_framework import serializers
from .models import Media, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug']


class MediaSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Media
        fields = [
            'id',
            'title',
            'slug',
            'description',
            'media_type',
            'file',
            'thumbnail',
            'article_content',
            'category',
            'tags',
            'publish_date',
            'is_published'
        ]
