from django.http.response import JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from .models import Planta
import json

# Create your views here.


class PlantaView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, id=0):
        if (id > 0):
            plantas = list(Planta.objects.filter(id=id).values())
            if len(plantas) > 0:
                planta = plantas[0]
                datos = {'message': "Éxito", 'planta': planta}
            else:
                datos = {'message': "Planta no encontrada..."}
            return JsonResponse(datos)
        else:
            plantas = list(Planta.objects.values())
            if len(plantas) > 0:
                datos = {'message': "Éxito", 'plantas': plantas}
            else:
                datos = {'message': "Plantas no encontradas..."}
            return JsonResponse(datos)

    def post(self, request):
        jd = json.loads(request.body)
        Planta.objects.create(nombre=jd['nombre'], tipo=jd['tipo'], descripcion=jd['descripcion'],color=jd['color'])
        datos = {'message': "Éxito"}
        return JsonResponse(datos)

    def put(self, request, id):
        jd = json.loads(request.body)
        plantas = list(Planta.objects.filter(id=id).values())
        if len(plantas) > 0:
            planta = Planta.objects.get(id=id)
            planta.nombre = jd['nombre']
            planta.tipo = jd['tipo']
            planta.descripcion = jd['descripcion']
            planta.color = jd['color']
            planta.save()
            datos = {'message': "Éxito"}
        else:
            datos = {'message': "Planta no encontrada..."}
        return JsonResponse(datos)

    def delete(self, request, id):
        plantas = list(Planta.objects.filter(id=id).values())
        if len(plantas) > 0:
            Planta.objects.filter(id=id).delete()
            datos = {'message': "Éxito"}
        else:
            datos = {'message': "Planta no encontrada..."}
        return JsonResponse(datos)