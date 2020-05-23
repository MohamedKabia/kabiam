from django.db import models
from datetime import datetime

# Create your models here.


class Messages(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(blank=False)
    message = models.TextField(blank=False)
    date_sent = models.DateField(default=datetime.now)

    def __str__(self):
        return self.name
