from django.urls import path
from review.views import ListCreateReviewView, ListReviewsByRestaurantView, ListReviewsByUserView, \
    RetrieveUpdateDeleteReviewView, LikeUnlikeReviewView, ListLikedReviewByUserView, ListReviewCommentedByUserView

urlpatterns = [
    # backend/api/reviews/
    path('new/<int:restaurant_id>/', ListCreateReviewView.as_view()),
    path('restaurant/<int:restaurant_id>/', ListReviewsByRestaurantView.as_view()),
    path('user/<int:user_id>/', ListReviewsByUserView.as_view()),
    path('<int:review_id>/', RetrieveUpdateDeleteReviewView.as_view()),
    path('like/<int:review_id>/', LikeUnlikeReviewView.as_view()),
    path('likes/', ListLikedReviewByUserView.as_view()),
    path('comments/', ListReviewCommentedByUserView.as_view()),
]
