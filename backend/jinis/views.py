from django.shortcuts import render
from .models import Bloques

from rest_framework import viewsets, generics
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import BloqueSerializer
from users.models import Participante
from users.serializers import ParticipanteSerializer
from rest_framework.permissions import AllowAny


# Create your views here.
# class CursoView(viewsets.ModelViewSet):
#     queryset = Curso.objects.all()
#     serializer_class = CursoSerializer

class SubjectListView(generics.ListAPIView):
    queryset = Bloques.objects.all()
    serializer_class = BloqueSerializer

class SubjectDetailView(generics.RetrieveAPIView):
    queryset = Bloques.objects.all()
    serializer_class = BloqueSerializer

@api_view(['GET'])
def participantes(request, format=None):
    participantes = Participante.objects.all()
    serializer = ParticipanteSerializer(participantes, many=True)
    return Response(serializer.data)