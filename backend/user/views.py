from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from user.serializer import UserSerializer
from django.contrib.auth import get_user_model

User = get_user_model()


class UserListView(ListAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
