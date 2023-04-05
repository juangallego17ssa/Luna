from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework import filters
from restaurant.models import Restaurant
from restaurant.serializers import RestaurantSerializer
from restaurant.permissions import IsSameUser


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


class BestRatedRestaurantsListView(ListAPIView):
    queryset = Restaurant.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        # Restaurants must be sorted by its ranking instead of by its name
        return Restaurant.objects.all().order_by('name')


"""
class CategoryListView(ListAPIView):

    def get(self, request):
        serializer = CategorySerializer(many=True)
        return Response(serializer.data)
"""
