from rest_framework import serializers
from comment.models import Comment
from user.serializers import UserSerializer
from review.serializers import ReviewSerializer


class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    review = ReviewSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = '__all__'
