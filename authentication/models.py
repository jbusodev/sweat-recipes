from django.contrib.auth.models import AbstractUser
from django.db import models
from api.models import Cuisine


class CustomUser(AbstractUser):
    fav_cuisine = models.ForeignKey(
        Cuisine, null=True, blank=True, on_delete=models.SET_NULL)
