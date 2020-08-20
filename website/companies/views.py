from django.shortcuts import render,get_object_or_404
from rest_framework.views import APIView
from rest_framework.views import Response
from rest_framework.views import status
from .models import User
from .serializers import UserSerializer
from django.http import HttpResponse
from django.template import loader

def index(request):
    user=User.objects.all()#connecting to database
    template=loader.get_template('companies/index.html')
    context={
        'all_user':user,
    }
#    1st approach for accesing any link and then we use template # html=''

    return HttpResponse(template.render(context,request))

class UserList(APIView):
    def get(self,request):
        user=User.objects.all()
        serializer=UserSerializer(user,many=True)
        return Response(serializer.data)
    def post(self):
        pass
class UserDetail(APIView):
    def get(self,request,pk):
        detail=User.objects.get(id=pk)
        serializer=UserSerializer(detail,many=False)
        return Response(serializer.data)
    def post(self):
        pass

class UserCreate(APIView):
    # def get(self):
    #     pass
    def post(self,request):
        serializer=UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)

class UserUpdate(APIView):
    # def get(self):
    #     pass
    def post(self,request,pk):
        update=User.objects.get(id=pk)
        serializer=UserSerializer(instance=update,data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)

class UserDelete(APIView):
    # def get(self):
    #     pass
    def delete(self,request,pk):
        de=User.objects.get(id=pk)
        de.delete()
        return Response("User deleted")





# Create your views here.
