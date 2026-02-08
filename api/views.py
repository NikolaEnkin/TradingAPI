from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(["GET"])
def candles(request):
    data = [
        {"time": "2023-01-02", "open": 130, "high": 135, "low": 128, "close": 132},
        {"time": "2023-01-03", "open": 132, "high": 138, "low": 131, "close": 136},
        {"time": "2023-01-04", "open": 136, "high": 140, "low": 134, "close": 138},
        {"time": "2023-01-05", "open": 138, "high": 142, "low": 137, "close": 141},
        {"time": "2023-01-06", "open": 141, "high": 145, "low": 139, "close": 400},
    ]
    return Response(data)
