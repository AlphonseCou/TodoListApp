from django.db import models


class Todo(models.Model):
    id: models.IntegerField
    name = models.CharField(max_length=120)
    description = models.CharField(max_length=1000)
    status = models.BooleanField()

