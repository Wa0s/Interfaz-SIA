from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from rest_framework import serializers
from .models import Ponente, Participante, User
# from django.core.exceptions import ValidationError
# import uuid

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["email", "nombre", 'apellido']

class PonenteSerializer(UserSerializer):
    class Meta(UserSerializer.Meta):
        model = Ponente

class ParticipanteSerializer(UserSerializer):
    nombre = serializers.CharField(source='user.nombre')
    email = serializers.ImageField(source='user.email') 
    date_joined = serializers.DateTimeField(source='user.date_joined')
    class Meta(UserSerializer.Meta):
        model = Participante
        fields = '__all__'

class RegisterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["email", "nombre", "password"]



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['email'] = user.email
        token['foto'] = user.foto.url
        token['id'] = user.id
        token['nombre'] = user.nombre
        token['apellido'] = user.apellido

        return token