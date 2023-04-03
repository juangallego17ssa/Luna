from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework import filters
from rest_framework.response import Response
from restaurant.models import Restaurant
from restaurant.serializers import RestaurantSerializer, CategorySerializer
from restaurant.permissions import IsSameUser


class RestaurantListView(ListAPIView):
    queryset = Restaurant.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = RestaurantSerializer


class ListCreateRestaurantView(ListCreateAPIView):
    queryset = Restaurant.objects.all().order_by('name')
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = RestaurantSerializer
    filter_backends = [filters.OrderingFilter]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class RetrieveUpdateDeleteRestaurantView(RetrieveUpdateDestroyAPIView):
    queryset = Restaurant.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly, IsSameUser]
    serializer_class = RestaurantSerializer
    lookup_field = 'id'


"""
class CategoryListView(ListAPIView):

    def get(self, request):
        serializer = CategorySerializer(many=True)
        return Response(serializer.data)
"""
