from django.urls import path, include
from api import views

urlpatterns = [
    path('candles/', views.candles)
]