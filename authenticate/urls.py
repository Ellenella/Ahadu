from django.urls import path, include

from rest_framework import routers
from rest_framework.authtoken import views

from authenticate.views import UserSignupViewset, UserViewDeleteRetrieve

router = routers.DefaultRouter()
router.register(r'users', UserViewDeleteRetrieve, basename='users')
router.register(r'accounts/signup', UserSignupViewset, basename='signup')

urlpatterns = [
    path('', include(router.urls)),
    path('/accounts/login/', views.obtain_auth_token),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
