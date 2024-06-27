from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenBlacklistView

from django.contrib.auth import authenticate

from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated

from django.contrib.auth.hashers import make_password

from rest_framework.permissions import AllowAny

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, MyTokenObtainPairSerializer, RegisterUserSerializer
from .models import Participante, Ponente, User
from rest_framework import generics
# from django.contrib.auth.hashers import make_password

from rest_framework.decorators import api_view, permission_classes
import datetime
import random
from django.shortcuts import get_object_or_404

from django.http import JsonResponse
from .models import Participante
from django.db.models import Sum

from rest_framework import generics, permissions
from .models import Ponente, Participante
from .serializers import PonenteSerializer, ParticipanteSerializer

class BaseUserView(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get_serializer_class(self):
        if self.request.user.is_ponente:
            return PonenteSerializer
        return ParticipanteSerializer

    # Implementar los métodos get, post, put, delete según sea necesario

class UserDetailView(BaseUserView, generics.RetrieveAPIView):
    def get_queryset(self):
        return self.get_serializer_class().Meta.model.objects.all()

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_solo_user(request, pk):
    user = User.objects.get(pk=pk)
    serializer = UserSerializer(user)
    return Response(serializer.data)


@api_view(['PUT'])
def edit_profile(request, email):
    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.user == user:
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(status=status.HTTP_401_UNAUTHORIZED)


@api_view(['GET'])
def search(request):
    query = request.query_params.get('query')
    if query is None:
        query = ''
    user = User.objects.filter(email__icontains=query)
    serializer = UserSerializer(user, many=True)
    return Response({'users': serializer.data})


@api_view(['DELETE'])
def delete_user(request, pk):
    user = User.objects.get(pk=pk)
    if request.user.is_staff:
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(status=status.HTTP_401_UNAUTHORIZED)


@api_view(['GET'])
def get_users(request):
    if request.user.is_staff:
        users = User.objects.exclude(email='admin@admin.com')
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
    return Response(serializer.data, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['POST'])
def registerPonente(request):
    data = request.data
    user = User.objects.create(
        email=data['email'],
        nombre=data['nombre'],
        # apellido=data['apellido'],
        password=make_password(data['password']),
    )
    ponente = Ponente.objects.create(
        user=user,
    )
    serializer = RegisterUserSerializer(ponente, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def registerParticipante(request):
    data = request.data
    if User.objects.filter(email=data['email']).exists():
        return Response({'error': 'El email ya está en uso'}, status=status.HTTP_400_BAD_REQUEST)
    
    user = User.objects.create(
        email=data['email'],
        nombre=data['nombre'],
        # apellido=data['apellido'],
        password=make_password(data['password']),
        # codigo=str(uuid.uuid4())
    )
    año=datetime.datetime.now().year
    digitos=random.randint(100000, 999999)
    estudiante = Participante.objects.create(
        user=user,
        codigo=f"{año}{digitos}"
    )
    serializer = RegisterUserSerializer(estudiante, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def asistencia(request, pk, format=None):
    objeto = get_object_or_404(Participante, pk=pk)
    objeto.asistencia += 1
    objeto.save()
    return Response({'status': 'Asistencia incrementada'}, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([AllowAny])
def participantes(request, format=None):
    participantes = Participante.objects.all()
    serializer = ParticipanteSerializer(participantes, many=True)
    return Response(serializer.data)

class LoginView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
@permission_classes([AllowAny])
def total_asistencias(request):
    total = Participante.objects.aggregate(total_asistencias=Sum('asistencia'))
    return JsonResponse(total)