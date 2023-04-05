from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework import filters
from restaurant.models import Restaurant
from restaurant.serializers import RestaurantSerializer
from restaurant.permissions import IsSameUserOrReadOnly, IsStaffOrReadOnly


class ListRestaurantView(ListAPIView):
    """
    Functionalities:
    - Get the list of all restaurants
    """
    queryset = Restaurant.objects.all()
    permission_classes = [AllowAny]
    serializer_class = RestaurantSerializer


class ListCreateRestaurantView(ListCreateAPIView):
    """
    Functionalities:
    - Create a new restaurant
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
    - Get the details of a specific restaurant
    - Update the details of a specific restaurant
    - Delete an existing restaurant
    Params:
    - Id of restaurant necessary
    Permissions:
    - Update and delete functionalities only allowed to restaurant admin
    """
    queryset = Restaurant.objects.all()
    permission_classes = [IsSameUserOrReadOnly, IsStaffOrReadOnly]
    serializer_class = RestaurantSerializer
    lookup_field = 'id'


class ListRestaurantByCategoryView(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = 'category_id'

    def get_queryset(self):
        category_id = self.kwargs.get('category_id')
        return Restaurant.objects.filter(category=category_id).order_by('name')


class ListRestaurantByUserView(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = 'user_id'

    def get_queryset(self):
        user_id = self.kwargs.get('user_id')
        return Restaurant.objects.filter(user=user_id).order_by('name')


class ListBestRatedRestaurantView(ListAPIView):
    queryset = Restaurant.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        # Restaurants must be sorted by its ranking instead of by its name
        return Restaurant.objects.all().order_by('name')


# This code was provided by courtesy of Maximiliano aka Max in under 5 min ;-)
class ListCategoryView(APIView):
    def get(self, request, *args, **kwargs):
        categories = list(Restaurant.category.field.choices)
        choices = []
        for category in categories:
            choices.append(category[1])
        return Response({"categories": choices})
