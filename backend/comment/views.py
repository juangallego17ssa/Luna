from rest_framework.generics import ListCreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from comment.models import Comment
from comment.serializers import CommentSerializer
from review.models import Review
from comment.permissions import IsSameUserOrReadOnly, IsStaffOrReadOnly


class ListCreateCommentView(ListCreateAPIView):
    """
    Functionalities:
        - List existing comments in queryset, sorted by comment creation date
        - Create a new comment for a specific review
    Params:
        - Id of review necessary
    Permissions:
        - Only allowed to authenticated users
    """
    queryset = Comment.objects.all().order_by('date_created')
    permission_classes = [IsAuthenticated]
    serializer_class = CommentSerializer

    def perform_create(self, serializer):
        review = Review.objects.get(pk=self.kwargs.get('review_id'))
        serializer.save(user=self.request.user, review=review)


class ListCommentByReviewView(ListAPIView):
    """
    Functionalities:
        - List all existing comments by a specific review id
        - Response sorted by comment creation date
    Params:
        - Id of review necessary
    Permissions:
        - Only allowed to authenticated users
    """
    permission_classes = [IsAuthenticated]
    serializer_class = CommentSerializer
    lookup_url_kwarg = 'review_id'

    def get_queryset(self):
        review_id = self.kwargs.get('review_id')
        return Comment.objects.filter(review_id=review_id).order_by('date_created')


class ListCommentByUserView(ListAPIView):
    """
    Functionalities:
        - List all existing comments by a specific user id
        - Response sorted by comment creation date
    Params:
        - Id of review necessary
    Permissions:
        - Only allowed to authenticated users
    """
    permission_classes = [IsAuthenticated]
    serializer_class = CommentSerializer
    lookup_url_kwarg = 'user_id'

    def get_queryset(self):
        user_id = self.kwargs.get('user_id')
        return Comment.objects.filter(user_id=user_id).order_by('date_created')


class RetrieveUpdateDeleteCommentView(RetrieveUpdateDestroyAPIView):
    """
    Functionalities:
        - List the details of a specific comment
        - Edit the details of a specific comment
        - Delete an existing comment
    Params:
        - Id of comment necessary
    Permissions:
        - Edit and delete functionalities only allowed to comment user
    """
    queryset = Comment.objects.all()
    permission_classes = [IsSameUserOrReadOnly, IsStaffOrReadOnly]
    serializer_class = CommentSerializer
    lookup_url_kwarg = 'comment_id'
