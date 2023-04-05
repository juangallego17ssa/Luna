from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework import filters
from django.db.models import Count, Avg
from restaurant.models import Restaurant
from restaurant.serializers import RestaurantSerializer
from restaurant.permissions import IsSameUserOrReadOnly, IsStaffOrReadOnly


class ListRestaurantView(ListAPIView):
    """
    Functionalities:
        - List all existing restaurants
    """
    queryset = Restaurant.objects.all()
    permission_classes = [AllowAny]
    serializer_class = RestaurantSerializer


class ListCreateRestaurantView(ListCreateAPIView):
    """
    Functionalities:
        - Create a new restaurant
    Permissions:
        - Only allowed to authenticated users
    """
    queryset = Restaurant.objects.all().order_by('name')
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = RestaurantSerializer
    filter_backends = [filters.OrderingFilter]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class RetrieveUpdateDeleteRestaurantView(RetrieveUpdateDestroyAPIView):
    """
    Functionalities:
        - List the details of a specific restaurant
        - Edit the details of a specific restaurant
        - Delete an existing restaurant
    Params:
        - Id of restaurant necessary
    Permissions:
        - Edit and delete functionalities only allowed to restaurant user
    """
    queryset = Restaurant.objects.all()
    permission_classes = [IsSameUserOrReadOnly, IsStaffOrReadOnly]
    serializer_class = RestaurantSerializer
    lookup_field = 'id'


class ListRestaurantByCategoryView(ListAPIView):
    """
    Functionalities:
        - List all existing restaurants by a specific category id
        - Response sorted by restaurant name
    Params:
        - Id of category necessary
    Permissions:
        - Only allowed to authenticated users
    """
    permission_classes = [IsAuthenticated]
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = 'category_id'

    def get_queryset(self):
        category_id = self.kwargs.get('category_id')
        return Restaurant.objects.filter(category=category_id).order_by('name')


class ListRestaurantByUserView(ListAPIView):
    """
    Functionalities:
        - List all existing restaurants created by a specific user id
        - Response sorted by restaurant name
    Params:
        - Id of category necessary
    Permissions:
        - Only allowed to authenticated users
    """
    permission_classes = [IsAuthenticated]
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = 'user_id'

    def get_queryset(self):
        user_id = self.kwargs.get('user_id')
        return Restaurant.objects.filter(user=user_id).order_by('name')


class ListBestRatedRestaurantView(ListAPIView):
    """
    Functionalities:
        - List the four restaurants with the best averaged rating
        - Response sorted by rating results
    Permissions:
        - Only allowed to authenticated users
    """
    queryset = Restaurant.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        restaurants = Restaurant.objects.annotate(
            reviews_quantity=Count('reviews'),
            rating_average=Avg('reviews__rating')
        )
        restaurants_filtered = restaurants.exclude(reviews_quantity=0)
        return restaurants_filtered.order_by('-rating_average')[:4]


# This code was provided by courtesy of Don Maximiliano aka Max in under 5 min ;-)
class ListCategoryView(APIView):
    """
    Functionalities:
        - List all existing restaurant categories
    """
    def get(self, request, *args, **kwargs):
        categories = list(Restaurant.category.field.choices)
        choices = []
        for category in categories:
            choices.append(category[1])
        return Response({"categories": choices})
