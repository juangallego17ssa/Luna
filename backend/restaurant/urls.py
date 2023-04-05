from django.urls import path
from restaurant.views import ListCreateRestaurantView, ListRestaurantByCategoryView, ListRestaurantByUserView, \
    RetrieveUpdateDeleteRestaurantView

urlpatterns = [
    # backend/api/restaurants/
    path('', ListCreateRestaurantView.as_view()),
    path('new/', ListCreateRestaurantView.as_view()),
    path('category/<int:category_id>/', ListRestaurantByCategoryView.as_view()),
    path('user/<int:user_id>/', ListRestaurantByUserView.as_view()),
    path('<int:id>/', RetrieveUpdateDeleteRestaurantView.as_view()),
]
