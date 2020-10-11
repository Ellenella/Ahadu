from django.urls import path 



from competition.views import QuestionView

# app_name = "Competi"

urlpatterns = [
    path('questions/<int:grade>/<str:subject>/<int:unit>/', QuestionView.as_view() )
]
