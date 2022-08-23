from dataclasses import field, fields
from statistics import mode
from rest_framework import serializers
from .models import Account
from rest_framework.authtoken.models import Token


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
         model = Account
         fields = '__all__'
         extra_kwargs = {'password':{'write_only':True, 'required':True}}

    def create(self,validate_data):
        account = Account.objects.create_user(**validate_data)
        Token.objects.create(account=account)
        return account