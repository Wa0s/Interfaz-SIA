from django.urls import path

from . import views


urlpatterns = [
    # path('', views.curso_list),
    path('', views.SubjectListView.as_view()),
    path('<pk>/', views.SubjectDetailView.as_view()),
    path('participantes/', views.participantes),
]