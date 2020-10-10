from authenticate.models import User, Role
from authenticate.serializer import UserSerializers, UserSignupSerializers
from authenticate.permissions import IsOwnerOrReadOnly

from rest_framework import viewsets, mixins, permissions

class UserViewDeleteRetrieve(viewsets.GenericViewSet, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    queryset = User.objects.all()
    serializer_class = UserSerializers
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]

class UserSignupViewset(viewsets.GenericViewSet, mixins.CreateModelMixin):
    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]
    serializer_class = UserSignupSerializers
    queryset = User.objects.all()
    serializer_class = UserSignupSerializers

    def get_queryset(self):
        return User.objects.filter(pk=self.request.user.pk)
