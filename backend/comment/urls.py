from django.urls import path
from comment.views import ListCreateCommentView, ListCommentByUserView, RetrieveUpdateDeleteCommentView

urlpatterns = [
    # backend/api/review/comment/
    path('list/<int:user_id>/', ListCommentByUserView.as_view()),
    path('new/<int:review_id>/', ListCreateCommentView.as_view()),
    path('<int:comment_id>/', RetrieveUpdateDeleteCommentView.as_view()),
]
