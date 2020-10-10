
from authenticate.models import User

from rest_framework import serializers

class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ['groups', 'user_permissions', 'is_superuser', 'is_staff', 'is_active', 'date_joined','last_login', 'password']

class UserSignupSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'photo', 'password','sex', 'role']



    