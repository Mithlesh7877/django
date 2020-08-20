from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        # fields=('name','profession','place')#or we can use shorter method
        fields='__all__'