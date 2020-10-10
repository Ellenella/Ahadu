
import random
import string

from django.db import models

from authenticate.models import User


class Score(models.Model):
    score = models.PositiveIntegerField()
    user = models.ForeignKey(User, verbose_name="user_score", on_delete=models.CASCADE)

    def __str__(self):
        return self.score + ' ' + self.user
    

class Category(models.Model):
    name = models.CharField("Name(Subject)", max_length=50)
    grade = models.PositiveSmallIntegerField("Grade")
    
    def __str__(self): 
        return self.name

class Unit(models.Model):
    category = models.ForeignKey(Category, verbose_name="catagories_unit", on_delete=models.CASCADE)
    number = models.PositiveSmallIntegerField("Unit number")
    title = models.CharField("Unit title", max_length=100)

    def __str__(self):
        return self.title + ' ' + self.number

class Choice(models.Model):
    choice = models.TextField("Choice")
    is_answer = models.BooleanField("Is Answer")

    
class Question(models.Model):
    unit = models.ForeignKey(Unit, on_delete=models.SET_NULL, blank=True, null=True)
    description = models.TextField("Question")
    choice = models.ManyToManyField(Choice)
    
    
class QuestionTrack(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    questions = models.ManyToManyField(Question)
    def __str__(self):
        return self.user

def get_random_string(length):
    letters = string.ascii_lowercase
    result_str = ''.join(random.choice(letters) for i in range(length))
    return result_str

def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    return 'user_{0}/{1}'.format(instance.user.id, filename+get_random_string())


class Resource(models.Model):
    user = models.ForeignKey(User, related_name='resourcetouser', on_delete=models.CASCADE)
    media = models.FileField(upload_to=user_directory_path, max_length = 100)
    