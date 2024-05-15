from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, NoteSerializer
from .models import Note
from rest_framework.permissions import IsAuthenticated, AllowAny
# Create your views here.
class NoteListCreate(generics.ListCreateAPIView):
    """
      Create a   note in the database
    """
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

        """
        Delete a note from the database
        """
class NoteDelete(generics.DestroyAPIView):
    queryset = Note.objects.all();
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)
        
        
        
        """
        Create a new user in the database
        """

class CreateUserView(generics.CreateAPIView):
    # queryset = User.objects.all()
    queryset = User.objects.none()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

