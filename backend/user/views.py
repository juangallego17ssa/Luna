from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from user.serializers import UserSerializer, UserUpdateSerializer
from django.contrib.auth import get_user_model
from django.db.models import Q
from user.permissions import IsSameUser, IsStaffOrReadOnly
from restaurant.models import Restaurant
from restaurant.serializers import RestaurantSerializer
from review.models import Review
from review.serializers import ReviewSerializer

User = get_user_model()


class MyUserRetrieveUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsSameUser]

    def get_object(self):
        return self.request.user

    # Use different serializers for get and patch methods
    def get_serializer_class(self):
        if self.request.method == 'GET':
            return UserSerializer
        elif self.request.method == 'PATCH':
            return UserUpdateSerializer
        return UserSerializer


class RetrieveUpdateDeleteMyUserView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsSameUser]

    def get_object(self):
        return self.request.user

    # Use different serializers for get and patch methods
    def get_serializer_class(self):
        if self.request.method == 'GET':
            return UserSerializer
        elif self.request.method == 'PATCH':
            return UserUpdateSerializer
        return UserSerializer


class ListUserView(ListAPIView):
    queryset = User.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer


class SearchUserView(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer

    def get_queryset(self):
        # This view should return a user based on the query param in url
        queryset = User.objects.all()
        username = self.request.query_params.get('search')
        if username is not None:
            queryset = queryset.filter(username=username)
        return queryset


class RetrieveUpdateDestroyUserView(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    permission_classes = [IsSameUser, IsStaffOrReadOnly]
    serializer_class = UserSerializer
    lookup_url_kwarg = 'user_id'


class SearchView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        search_type = request.query_params.get('type')
        search_value = request.query_params.get('search_string')

        if search_type == 'restaurants':
            restaurants = Restaurant.objects.filter(
                Q(name__icontains=search_value) |
                Q(category__icontains=search_value) |
                Q(city__icontains=search_value) |
                Q(email__icontains=search_value) |
                Q(website__icontains=search_value)
            )
            serializer = RestaurantSerializer(restaurants, many=True)
            return Response(serializer.data)

        elif search_type == 'reviews':
            reviews = Review.objects.filter(
                Q(text_content__icontains=search_value) |
                Q(user__username__icontains=search_value)
            )
            serializer = ReviewSerializer(reviews, many=True)
            return Response(serializer.data)

        elif search_type == 'users':
            users = User.objects.filter(
                Q(username__icontains=search_value) |
                Q(first_name__icontains=search_value) |
                Q(last_name__icontains=search_value) |
                Q(email__icontains=search_value)
            )
            serializer = UserSerializer(users, many=True)
            return Response(serializer.data)

        else:
            return Response({'message': 'Invalid search type.'}, status=400)
