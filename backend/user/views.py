from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from user.serializers import UserSerializer, UserUpdateSerializer
from django.contrib.auth import get_user_model
from user.permissions import IsSameUser, IsStaffOrReadOnly

User = get_user_model()


class RetrieveUpdateDeleteMyUserView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsSameUser]

    def get_object(self):
        return self.request.user

    # Use different serializers for get and patch methods
    def get_serializer_class(self):
        if self.request.method == 'GET':
            return UserSerializer
        elif self.request.method == 'PATCH':
            return UserUpdateSerializer
        return UserSerializer


class ListUserView(ListAPIView):
    queryset = User.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer


class SearchUserView(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer

    def get_queryset(self):
        # This view should return a user based on the query param in url
        queryset = User.objects.all()
        username = self.request.query_params.get('search')
        if username is not None:
            queryset = queryset.filter(username=username)
        return queryset


class RetrieveUpdateDestroyUserView(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    permission_classes = [IsSameUser, IsStaffOrReadOnly]
    serializer_class = UserSerializer
    lookup_url_kwarg = 'user_id'
