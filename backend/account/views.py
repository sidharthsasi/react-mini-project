import imp
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import AccountSerializer
from .models import Account

# Create your views here.

class AccountViewset(viewsets.ModelViewSet):
    serializer_class = AccountSerializer
    queryset = Account.objects.all()
    
