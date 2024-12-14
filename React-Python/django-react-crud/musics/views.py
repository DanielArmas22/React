from rest_framework import viewsets
from .serializer import MusicSerializer
from .models import Music
# Create your views here.

# Create a class MusicViewSet, to get all the data from the model and pass it to the serializer
class MusicViewSet(viewsets.ModelViewSet): # inherit from viewsets.ModelViewSet
    queryset = Music.objects.all() # get all the data from the model
    serializer_class = MusicSerializer # pass the data to the serializer