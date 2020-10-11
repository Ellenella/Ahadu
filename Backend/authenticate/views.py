from authenticate.models import User, Role
from authenticate.serializer import UserSerializer, UserDetailSerializers
from authenticate.permissions import IsOwnerOrReadOnly, OnlyAdminAndOwner

from rest_framework import viewsets, mixins, permissions , generics
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.authtoken.models import Token


# class UserViewDeleteRetrieve(viewsets.GenericViewSet, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
#     queryset = User.objects.all()
#     serializer_class = UserSerializers
#     permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]

class UserSignup(generics.CreateAPIView, generics.ListAPIView):
    permission_classes = [
        permissions.AllowAny  # Or anon users can't register,
    ]
    serializer_class = UserSerializer
    queryset = User.objects.all()


    def perform_create(self, serializer):
        user = serializer.save()
        token = Token.objects.get_or_create(user=user)
        user = serializer.save(token=token[0])

class UserView(mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    permission_classes = [
        OnlyAdminAndOwner,
        permissions.AllowAny  # Or anon users can't register,
    ]
    serializer_class = UserDetailSerializers
    queryset = User.objects.all()

    

    # def retrieve(self, request, *args, **kwargs):
    #     user = User.objects.get(pk=request.user.pk)
    #     userserializer = UserSerializer(user)
    #     return Response(userserializer.data)
