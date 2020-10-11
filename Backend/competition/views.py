from django.shortcuts import render
from django.http import HttpResponse

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions

from competition.serializers import QuestionSerializer
from competition.models import Question


class QuestionView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):

        questions = Question.objects.filter(
            unit__number=kwargs['unit'],
            unit__category__grade=kwargs['grade'], 
            unit__category__name=kwargs['subject'])
        questionS = QuestionSerializer(questions, many=True)
        return Response(questionS.data)
    
    def post(self, request, *args, **kwargs):
        question = kwargs['questionAnswer']
        for i in question:
            print(i)

class CheckQuestion(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args, **kwargs):
        question = kwargs['questionId']
        answer = request.POST.get('answer')
        question = Question.objects.get(id=question)
        if question.choice.get(answer=answer).is_answer:
            return Response({
                'correct' : True
            })
        else:
            return Response({
                'correct' : False
            })