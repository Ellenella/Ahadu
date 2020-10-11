from rest_framework import permissions


class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to edit it.
    """

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return False

        # Write permissions are only allowed to the owner of the snippet.
        return obj.owner == request.user

class OnlyAdminAndOwner(permissions.BasePermission):
    """
    Object-level permission to only allow owners and admin of an object to get info.
    Assumes the model instance has an `owner` attribute.
    """

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in 'GET':
            # print(obj., dir(obj))
            return (obj == request.user) or (request.user.role == 'admin' or request.user.is_superuser) 

        # Instance must have an attribute named `owner`.
        return True