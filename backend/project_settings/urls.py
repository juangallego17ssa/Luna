from django.contrib import admin
from django.conf.urls.static import static
from django.urls import path, include
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from rest_framework_simplejwt import views as jwt_views
from project_settings import settings
from user.views import RetrieveUpdateDeleteMyUserView
from restaurant.views import BestRatedRestaurantsListView

schema_view = get_schema_view(
    openapi.Info(
        title="Luna Restaurants",
        default_version='v1',
        description="Example",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="learn@propulsionacademy.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,  # Set to False restrict access to protected endpoints
    permission_classes=(permissions.AllowAny,),  # Permissions for docs access
)

urlpatterns = [
    path('backend/api/docs/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-swagger-ui'),
    path('backend/api/admin/', admin.site.urls),
    path('backend/api/registration/', include('registration.urls')),
    path('backend/api/auth/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('backend/api/auth/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('backend/api/auth/token/verify/', jwt_views.TokenVerifyView.as_view(), name='token_refresh'),
    # path for search functionalities
    path('backend/api/home/', BestRatedRestaurantsListView.as_view()),
    path('backend/api/me/', RetrieveUpdateDeleteMyUserView.as_view()),
    path('backend/api/users/', include('user.urls')),
    path('backend/api/restaurants/', include('restaurant.urls')),
    path('backend/api/reviews/', include('review.urls')),
    path('backend/api/review/comment/', include('comment.urls')),
    # path('backend/api/category/list/', CategoryListView.as_view()),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
