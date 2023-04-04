from rest_framework.permissions import BasePermission, SAFE_METHODS


class IsSameUserOrReadOnly(BasePermission):
    def has_object_permission(self, request, view, obj):
        return bool(request.method in SAFE_METHODS or obj == request.user)


class IsStaffOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        return bool(request.method in SAFE_METHODS or request.user.is_staff)
