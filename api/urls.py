from django.urls import path, include
from api import views

urlpatterns = [
    path('market/quote', QuoteView.as_view()),
    path('market/candles', CandlesView.as_view()),
]