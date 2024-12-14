from rest_framework import serializers
from .models import Music
class MusicSerializer(serializers.ModelSerializer):
    class Meta:
        # fields = (
        #     'id',
        #     'title',
        #     'album',
        #     'genre',
        #     'artist',
        #     'release_date',
        # )
        models = Music
        fields = '__all__' # all fields