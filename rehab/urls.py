from django.urls import path
from .views import (
    MedicineList,
    AnimalList,
    LogList,
    UserAnimalsList,
    UserCreateAnimal,
    AnimalDetail,
    AnimalLogs,
    ArchiveAnimal,
    DeleteAnimal,
    ReleaseAnimal,
    CreateLogEntry,
)
    

urlpatterns = [
    path('medicine/', MedicineList.as_view(), name = 'medicine_list'),
    path('animals/', AnimalList.as_view(), name = 'animal_list'),
    path('animals/<int:pk>/', UserAnimalsList.as_view(), name = 'user_animals_list'),
    path('animals/<int:pk>/create/', UserCreateAnimal.as_view(), name = 'user_create_animal'),
    path('animals/<int:pk>/detail/', AnimalDetail.as_view(), name = 'animal_detail'),
    path('animals/<int:pk>/logs/', AnimalLogs.as_view(), name = 'animal_logs'),
    path('animal/<int:pk>/archive/', ArchiveAnimal.as_view(), name = 'archive_animal'),
    path('animal/<int:pk>/delete/', DeleteAnimal.as_view(), name = 'delete_animal'),
    path('animal/<int:pk>/release/', ReleaseAnimal.as_view(), name = 'release_animal'),
    path('log/<int:pk>/create/', CreateLogEntry.as_view(), name = 'new_log_entry'),
]