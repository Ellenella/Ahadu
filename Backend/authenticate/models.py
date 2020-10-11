from django.db import models
from django.contrib.auth.models import AbstractUser


from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

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

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)