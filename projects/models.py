from django.db import models
from datetime import datetime

# Create your models here.


class Projects(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=False)
    site_url = models.CharField(max_length=200,  default='')
    git_url = models.CharField(max_length=200, default='')
    image = models.ImageField(upload_to='photos/%Y%m%d/')
    is_published = models.BooleanField(default=True)
    date = models.DateField(default=datetime.now)

    objects = models.Manager()

    def __str__(self):
        return self.title

