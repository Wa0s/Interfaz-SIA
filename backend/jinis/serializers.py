from rest_framework.serializers import ModelSerializer

from rest_framework import serializers

from .models import Bloques

from users.models import Ponente


class PonenteSerializer(ModelSerializer):
    nombre = serializers.CharField(source='user.nombre')
    foto = serializers.ImageField(source='user.foto')
    email = serializers.CharField(source='user.email')
    class Meta:
        model = Ponente
        fields = ['nombre','foto','email']

class BloqueSerializer(ModelSerializer):
    ponente = PonenteSerializer()
    class Meta:
        model = Bloques
        fields = '__all__'