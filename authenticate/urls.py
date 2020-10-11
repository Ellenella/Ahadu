from django.urls import path, include

from rest_framework import routers
from rest_framework.authtoken import views

from authenticate.views import UserView, UserSignup

router = routers.DefaultRouter()
# router.register(r'users', UserViewDeleteRetrieve, basename='users')
router.register(r'accounts/user', UserView, basename='user')

urlpatterns = [
    path('', include(router.urls)),
    path('signup/', UserSignup.as_view()),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]


urlpatterns += [
    # in this the username and pass must provide by json format in the body
    path('login/', views.obtain_auth_token),

]