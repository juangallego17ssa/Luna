from rest_framework import serializers
from restaurant.models import Restaurant
from user.serializers import UserSerializer


class RestaurantSerializer(serializers.ModelSerializer):
    name = serializers.CharField(required=True)
    category = serializers.CharField(required=True)
    country = serializers.CharField(required=True)
    street = serializers.CharField(required=True)
    city = serializers.CharField(required=True)
    phone = serializers.CharField(required=True)
    opening_hours = serializers.CharField(required=True)
    user = UserSerializer(read_only=True)

    class Meta:
        model = Restaurant
        fields = '__all__'


"""
class CategorySerializer(serializers.ModelSerializer):
    category = serializers.ChoiceField(choices=Restaurant.CATEGORIES)
"""