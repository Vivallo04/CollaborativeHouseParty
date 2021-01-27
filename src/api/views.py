from django.shortcuts import render
from rest_framework import generics
from .serializers import RoomSerializer
from .models import Room


#Api View

#A view that returns all the different rooms(The Room objects)

class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
