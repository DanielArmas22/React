from django.urls import path, include
from rest_framework import routers
# from .views import MusicViewSet
from musics import views

router = routers.DefaultRouter() # create a router object (genera las rutas de la API para el modelo)

router.register(r'musics', views.MusicViewSet, 'musics') # register the model with the router

urlpatterns = [
    path('api/v1/',include(router.urls)) 
    # include the router urls in the urlpatterns  (incluye las rutas del router en las urls)
]
#con este codigo se generan las rutas de la API para el modelo
# GET, POST, PUT, DELETE