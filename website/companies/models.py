from django.db import models

# Create your models here.
#Serializer class will convert this into json file
class User(models.Model):
    name=models.CharField(max_length=250)
    place=models.CharField(max_length=250)
    profession=models.CharField(max_length=250)
    def __str__(self):
        return self.name