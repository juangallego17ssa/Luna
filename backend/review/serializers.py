from rest_framework import serializers
from review.models import Review
from user.serializers import UserSerializer
from restaurant.serializers import RestaurantSerializer


class ReviewSerializer(serializers.ModelSerializer):
    text_content = serializers.CharField(required=True)
    rating = serializers.IntegerField(required=True)
    user = UserSerializer(read_only=True)
    restaurant = RestaurantSerializer(read_only=True)

    class Meta:
        model = Review
        fields = '__all__'


class LikedReviewSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    restaurant = RestaurantSerializer(read_only=True)
    likes = UserSerializer(read_only=True, many=True)

    class Meta:
        model = Review
        fields = '__all__'
