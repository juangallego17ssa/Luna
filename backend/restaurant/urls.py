from django.urls import path
from restaurant.views import RestaurantListView, ListCreateRestaurantView, RetrieveUpdateDeleteRestaurantView

urlpatterns = [
    # backend/api/restaurants/
    path('', RestaurantListView.as_view()),
    path('new/', ListCreateRestaurantView.as_view()),
    path('<int:id>/', RetrieveUpdateDeleteRestaurantView.as_view()),
    # path('', UserSearchView.as_view()),
    # path('<int:user_id>/', UserRetrieveUpdateDestroyView.as_view()),
]
