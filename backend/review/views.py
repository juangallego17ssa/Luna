from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from review.models import Review
from review.serializers import ReviewSerializer, LikedReviewSerializer
from restaurant.models import Restaurant


class ListCreateReviewView(ListCreateAPIView):
    queryset = Review.objects.all().order_by('date_created')
    permission_classes = [IsAuthenticated]
    serializer_class = ReviewSerializer

    def perform_create(self, serializer):
        restaurant = Restaurant.objects.get(pk=self.kwargs.get('restaurant_id'))
        serializer.save(user=self.request.user, restaurant=restaurant)


class ListReviewsByRestaurantView(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'restaurant_id'

    def get_queryset(self):
        restaurant_id = self.kwargs.get('restaurant_id')
        return Review.objects.filter(restaurant_id=restaurant_id).order_by('date_created')


class ListReviewsByUserView(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'user_id'

    def get_queryset(self):
        user_id = self.kwargs.get('user_id')
        return Review.objects.filter(user_id=user_id).order_by('date_created')


class RetrieveUpdateDeleteReviewView(RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'review_id'


class LikeUnlikeReviewView(RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = LikedReviewSerializer
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
        serializer = self.get_serializer(instance)
        if instance in liked_by_user:
            request.user.reviews_liked.remove(instance)
            instance.likes_count = instance.likes.count()
            instance.save()
            return Response({'status': 'Review unliked'})
        else:
            return Response({'status': 'Review was not liked'})


class ListLikedReviewByUserView(ListAPIView):
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Review.objects.filter(likes=self.request.user)
