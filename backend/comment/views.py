from rest_framework.generics import ListCreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from comment.models import Comment
from comment.serializers import CommentSerializer
from review.models import Review


class ListCreateCommentView(ListCreateAPIView):
    queryset = Comment.objects.all().order_by('date_created')
    permission_classes = [IsAuthenticated]
    serializer_class = CommentSerializer

    def perform_create(self, serializer):
        review = Review.objects.get(pk=self.kwargs.get('review_id'))
        serializer.save(user=self.request.user, review=review)


class ListCommentsByUserView(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CommentSerializer
    lookup_url_kwarg = 'user_id'

    def get_queryset(self):
        user_id = self.kwargs.get('user_id')
        return Comment.objects.filter(user_id=user_id).order_by('date_created')


class RetrieveUpdateDeleteCommentView(RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = CommentSerializer
    lookup_url_kwarg = 'comment_id'
