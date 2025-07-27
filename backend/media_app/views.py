from django.shortcuts import render
from rest_framework import generics
from .models import Media, Category
from .serializers import MediaSerializer, CategorySerializer
from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json
import requests


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


@csrf_exempt
def verify_email(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            email = data.get("email", "")
            if not email or "@" not in email:
                return JsonResponse({"exists": False, "error": "Invalid email format."}, status=400)

            # Abstract API call
            api_key = "76639f010bab4155925f205b2ffda219"
            api_url = f"https://emailvalidation.abstractapi.com/v1/?api_key={api_key}&email={email}"
            resp = requests.get(api_url)
            result = resp.json()

            # Check if deliverable
            exists = result.get("deliverability") == "DELIVERABLE"
            return JsonResponse({"exists": exists})
        except Exception as e:
            return JsonResponse({"exists": False, "error": str(e)}, status=500)
    return JsonResponse({"error": "Invalid request method."}, status=405)
