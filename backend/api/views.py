from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, permissions
from .models import *
from .serializers import *
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
class StudentViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

    @csrf_exempt
    def list(self, request):
        queryset = Student.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    @csrf_exempt
    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    @csrf_exempt
    def retrieve(self, request, pk=None):
        student = self.queryset.get(pk=pk)
        serializer = self.serializer_class(student)
        return Response(serializer.data)

    @csrf_exempt
    def update(self, request, pk=None):
        student = self.queryset.get(pk=pk)
        serializer = self.serializer_class(student, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.error, status=400)
    
    @csrf_exempt
    def destroy(self, request, pk=None):
        student = self.queryset.get(pk=pk)
        student.delete()
        return Response(status=204)