from rest_framework import viewsets
from .serializer import MusicSerializer
from .models import Music
# Create your views here.

# Create a class MusicViewSet, to get all the data from the model and pass it to the serializer
class MusicViewSet(viewsets.ModelViewSet): # inherit from viewsets.ModelViewSet
    queryset = Music.objects.all() # get all the data from the model (campos con los que se va a trabajar)
    serializer_class = MusicSerializer # pass the data to the serializer


#no se usa el render de django, se usa el render de react. Django solo sirve como API