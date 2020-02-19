from django.db import models
from django.contrib.auth.models import User
from datetime import datetime

# Create your models here.
class Medicine(models.Model):
    """Medicine model."""
    name = models.CharField(max_length=31)
    category = models.CharField(max_length=31)
    description = models.TextField()

    def __str__(self):
        """Medicine string representation."""
        return self.name

class Animal(models.Model):
    """Animal information model."""
    vet = models.ForeignKey(User, on_delete = models.CASCADE)
    name = models.CharField(max_length=31)
    weight = models.FloatField()
    entry_at = models.DateTimeField(auto_now_add=True)
    exit_at = models.DateTimeField(auto_now=True)
    details = models.TextField()
    is_archived = models.BooleanField()

    def __str__(self):
        """Animal string representation."""
        return self.name

class Log(models.Model):
    """Animal health logs model."""
    animal = models.ForeignKey(Animal, on_delete = models.CASCADE )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    description = models.TextField()

    def __str__(self):
        """ Log string representation"""
        return f'{self.animal}-{self.created_at}'

