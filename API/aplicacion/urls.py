from django.urls import path
from .views import PlantaView

urlpatterns = [
    path('plantas/', PlantaView.as_view(), name='plantas_list'),
    path('plantas/<int:id>', PlantaView.as_view(), name='plantas_process')
]