from django.urls import path

from user.views import UserListView

urlpatterns = [
    # backend/api/users/
    path("", UserListView.as_view()),
]
