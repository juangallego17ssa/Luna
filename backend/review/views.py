from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from review.models import Review
from review.serializers import ReviewSerializer
from restaurant.models import Restaurant
from review.permissions import IsSameUserOrReadOnly, IsStaffOrReadOnly


class ListCreateReviewView(ListCreateAPIView):
    """
    Functionalities:
        - List existing reviews in queryset, sorted by review creation date
        - Create a new review for a specific restaurant
    Params:
        - Id of restaurant necessary
    Permissions:
        - Only allowed to authenticated users
    """
    queryset = Review.objects.all().order_by('date_created')
    permission_classes = [IsAuthenticated]
    serializer_class = ReviewSerializer

    def perform_create(self, serializer):
        restaurant = Restaurant.objects.get(pk=self.kwargs.get('restaurant_id'))
        serializer.save(user=self.request.user, restaurant=restaurant)


class ListReviewByRestaurantView(ListAPIView):
    """
    Functionalities:
        - List all existing reviews by a specific restaurant id
        - Response sorted by review creation date
    Params:
        - Id of restaurant necessary
    Permissions:
        - Only allowed to authenticated users
    """
    permission_classes = [IsAuthenticated]
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'restaurant_id'

    def get_queryset(self):
        restaurant_id = self.kwargs.get('restaurant_id')
        return Review.objects.filter(restaurant_id=restaurant_id).order_by('date_created')


class ListReviewByUserView(ListAPIView):
    """
    Functionalities:
        - List all existing reviews by a specific user id
        - Response sorted by review creation date
    Params:
        - Id of user necessary
    Permissions:
        - Only allowed to authenticated users
    """
    permission_classes = [IsAuthenticated]
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'user_id'

    def get_queryset(self):
        user_id = self.kwargs.get('user_id')
        return Review.objects.filter(user_id=user_id).order_by('date_created')


class RetrieveUpdateDeleteReviewView(RetrieveUpdateDestroyAPIView):
    """
    Functionalities:
        - List the details of a specific review
        - Edit the details of a specific review
        - Delete an existing review
    Params:
        - Id of review necessary
    Permissions:
        - Edit and delete functionalities only allowed to review user
    """
    queryset = Review.objects.all()
    permission_classes = [IsSameUserOrReadOnly, IsStaffOrReadOnly]
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'review_id'


class LikeUnlikeReviewView(RetrieveUpdateDestroyAPIView):
    """
    Functionalities:
        - Like or unlike a specific review
    Params:
        - Id of review necessary
    Permissions:
        - Only allowed to restaurant user
    """
    queryset = Review.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'review_id'

    def post(self, request, *args, **kwargs):
        liked_by_user = request.user.reviews_liked.all()
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        if instance in liked_by_user:
            return Response({'status': 'Review already liked'})
        else:
            request.user.reviews_liked.add(instance)
            instance.likes_count = instance.likes.count()
            instance.save()
            return Response(serializer.data)

    def delete(self, request, *args, **kwargs):
        liked_by_user = request.user.reviews_liked.all()
        instance = self.get_object()
        if instance in liked_by_user:
            request.user.reviews_liked.remove(instance)
            instance.likes_count = instance.likes.count()
            instance.save()
            return Response({'status': 'Review unliked'})
        else:
            return Response({'status': 'Review was not liked'})


class ListLikedReviewByUserView(ListAPIView):
    """
    Functionalities:
        - List all existing reviews created by the current, logged-in user
        - Response sorted by review creation date
    Permissions:
        - Only allowed to authenticated users
    """
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Review.objects.filter(likes=self.request.user).order_by('date_created')


class ListReviewCommentedByUserView(ListAPIView):
    """
    Functionalities:
        - List all existing reviews commented by the current, logged-in user
        - Response sorted by review creation date
    Permissions:
        - Only allowed to authenticated users
    """
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Review.objects.filter(comments__user=self.request.user).order_by('date_created')
