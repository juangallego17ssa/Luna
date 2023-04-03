from django.urls import path

from user.views import MyUserRetrieveUpdateDeleteView, UserListView, UserSearchView, UserRetrieveUpdateDestroyView

urlpatterns = [
    # backend/api/users/
    path('me/', MyUserRetrieveUpdateDeleteView.as_view()),
    path('list/', UserListView.as_view()),
    path('', UserSearchView.as_view()),
    path('<int:user_id>/', UserRetrieveUpdateDestroyView.as_view()),
]
