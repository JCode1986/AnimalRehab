from django.contrib.auth.models import User
from .models import Medicine, Animal, Log
from .serializers import MedicineSerializer, AnimalSerializer, LogSerializer
from rest_framework import generics
from django.shortcuts import get_object_or_404
import datetime


# Medicine views

class MedicineList(generics.ListCreateAPIView):
    """Retrieving all medicines."""
    queryset = Medicine.objects.all()
    serializer_class = MedicineSerializer


# Animal views


class AnimalList(generics.ListCreateAPIView):
    """Retrieving all animals."""
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer


class UserAnimalsList(generics.ListAPIView):
    """List all animals of user."""
    serializer_class = AnimalSerializer
    
    def get_queryset(self):
        """Set of all animals of user."""
        self.vet = get_object_or_404(User, id=self.kwargs['pk'])
        return Animal.objects.filter(vet=self.vet)


class UserCreateAnimal(generics.CreateAPIView):
    """Add an animal to in-care."""
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer


class AnimalDetail(generics.ListAPIView):
    """See all animals of a user."""
    serializer_class = AnimalSerializer

    def get_queryset(self):
        """User's animals."""
        return Animal.objects.filter(id=self.kwargs['pk'])


class ArchiveAnimal(generics.UpdateAPIView):
    """Toggle animal's archived field."""
    serializer_class = AnimalSerializer

    def get_queryset(self):
        """Toggle animal's archived field."""
        self.animal = get_object_or_404(Animal, id=self.kwargs['pk'])
        self.animal.is_archived = not self.animal.is_archived
        self.animal.save()


class DeleteAnimal(generics.DestroyAPIView):
    """Deletes animal from in-care"""
    serializer_class = AnimalSerializer

    def get_queryset(self):
        """queryset for deletion"""
        return Animal.objects.filter(id=self.kwargs['pk'])


class ReleaseAnimal(generics.UpdateAPIView):
    """Updates animal's release from care date"""
    serializer_class = AnimalSerializer

    def get_queryset(self):
        """queryset for update release status"""
        self.animal = get_object_or_404(Animal, id=self.kwargs['pk'])
        self.animal.exit_at = datetime.datetime.now()
        self.animal.save()


class CreateLogEntry(generics.CreateAPIView):
    """Create a new log entry"""
    serializer_class = LogSerializer
    queryset = Log.objects.all()



# Log views


class LogList(generics.ListCreateAPIView):
    """Retrieving all logs."""
    queryset = Log.objects.all()
    serializer_class = LogSerializer


class AnimalLogs(generics.ListAPIView):
    """Read all logs of one animal."""
    serializer_class = LogSerializer

    def get_queryset(self):
        """Read all logs of one animal."""
        return Log.objects.filter(id=self.kwargs['pk'])

