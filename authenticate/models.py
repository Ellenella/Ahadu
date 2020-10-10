from django.db import models
from django.contrib.auth.models import AbstractUser

class Role(models.Model):
    role = models.CharField(max_length=200)
    def __str__(self):
        return self.role

class User(AbstractUser):
    photo = models.ImageField(upload_to='',blank=True,null=True)
    sex = models.CharField(max_length=10, choices=(('male', 'male'), ('female', 'female')))
    role = models.ForeignKey('Role', related_name='admin_role', on_delete=models.SET_NULL, blank=True, null=True )

    def __str__(self):
        return self.first_name + ' ' + self.last_name

