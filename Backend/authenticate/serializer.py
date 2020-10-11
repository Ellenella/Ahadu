
from authenticate.models import User

from rest_framework import serializers

class UserDetailSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ['groups', 'user_permissions', 'is_superuser', 'is_staff', 'is_active', 'date_joined','last_login', 'password']

class UserSerializer(serializers.ModelSerializer):
    token = serializers.CharField(allow_blank=True, required=False, read_only=True)
    class Meta:
        model = User
        fields = [ 'token' , 'first_name', 'last_name', 'username', 'email', 'role']
        
        def create(self, validated_data):
            '''
            Override the create method of this to create user
            '''
            user = User.objects.create(
            username=validated_data['username'])
            user.set_password(validated_data['password'])
            user.save()
            return user