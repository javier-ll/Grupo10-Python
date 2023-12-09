from django.db import models

# Create your models here.

class Planta(models.Model):
    nombre = models.CharField(max_length=50)
    tipo = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=200)
    color = models.CharField(max_length=50)