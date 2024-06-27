from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('users/<int:pk>/', views.UserDetailView.as_view(), name='user-detail'),


    path('search/', views.search),
    path('registerA/', views.registerParticipante),
    path('registerD/', views.registerPonente),
    path('login/', views.LoginView.as_view()),
    path('refresh/', TokenRefreshView.as_view()),
    # path('get/', views.get_users),
    path('delete/<int:pk>/', views.delete_user),
    path('edit/<str:email>/', views.edit_profile),
    path('get/solo/<int:pk>/', views.get_solo_user),
    path('<str:username>/', views.get_solo_user),
    path('asistencia/<int:pk>/', views.asistencia),
    path('participantes/', views.participantes ),
    path('total_asistencias/', views.total_asistencias),

]