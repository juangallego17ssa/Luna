from django.urls import path

from user.views import UserListView, UserSearchView, UserRetrieveUpdateDestroyView

urlpatterns = [
    # backend/api/users/
    path('list/', UserListView.as_view()),
    path('', UserSearchView.as_view()),
    path('<int:user_id>/', UserRetrieveUpdateDestroyView.as_view()),
]
