from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView


class MarketView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        ...