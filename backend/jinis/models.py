from django.db import models

from users.models import Ponente
# Create your models here.
class Bloques(models.Model):
    titulo = models.CharField(max_length=255)
    ponente = models.ForeignKey(Ponente, on_delete=models.CASCADE, blank=True, null=True)
    fechaInicio = models.DateTimeField()
    fechaFin = models.DateTimeField()
    is_active = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    class Meta:
        ordering = ['titulo']
    
    def __str__(self):
        return self.titulo
        