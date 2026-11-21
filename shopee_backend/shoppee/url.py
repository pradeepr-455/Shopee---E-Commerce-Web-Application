from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import RegisterView
from .views import EmailLoginView
from .views import CurrentUserView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', EmailLoginView.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path("me/", CurrentUserView.as_view(), name="current-user"),
]
