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
    reviews_quantity = serializers.SerializerMethodField()
    rating_average = serializers.SerializerMethodField()

    class Meta:
        model = Restaurant
        fields = '__all__'
        extra_fields = {
            'user': {'read_only': True}
        }

    def get_reviews_quantity(self, obj):
        return obj.reviews.count()

    def get_rating_average(self, obj):
        reviews = obj.reviews.all()
        if not reviews:
            return 0
        rating_total = 0
        for review in reviews:
            rating_total += review.rating
        rating_average = rating_total / len(reviews)
        return round(rating_average, 2)
