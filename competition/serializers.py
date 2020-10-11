from rest_framework import serializers


from competition.models import Question 


class QuestionSerializer(serializers.ModelSerializer):
    choice = serializers.StringRelatedField(many=True, read_only=True  )
    class Meta:
        model= Question 
        fields = ['id', 'description', 'choice']

