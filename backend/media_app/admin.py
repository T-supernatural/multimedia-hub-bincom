from django.contrib import admin
from .models import Media, Category


@admin.register(Media)
class MediaAdmin(admin.ModelAdmin):
    list_display = ('title', 'media_type', 'is_published', 'publish_date')
    list_filter = ('media_type', 'is_published', 'category')
    search_fields = ('title', 'description', 'tags')


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
