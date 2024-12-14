from django.db import models

# Create your models here.
class Music(models.Model):
    title = models.CharField(max_length=100)
    artist = models.CharField(max_length=100)
    album = models.CharField(max_length=100)
    genre = models.CharField(max_length=100)
    release_date = models.DateField()
    credit = models.TextField(blank=True)
    liked = models.BooleanField(default=False)

    def __str__(self):
        return self.title