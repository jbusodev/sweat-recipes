from distutils.log import Log
from django.urls import path
from rest_framework_simplejwt import views as JWT_Views
# backend views
from .views import ObtainTokenPairWithCuisineView, CustomUserCreate, LogoutAndBlacklistRefreshTokenForUserView
# protected views
from .views import RecipesView, SearchView, ListsView, ProfileView


urlpatterns = [
    path('user/create/', CustomUserCreate.as_view(), name="create_user"),
    path('token/obtain/', ObtainTokenPairWithCuisineView.as_view(),
         name='token_create'),
    path('token/refresh/', JWT_Views.TokenRefreshView.as_view(),
         name='token_refresh'),
    path('blacklist/', LogoutAndBlacklistRefreshTokenForUserView.as_view(),
         name='blacklist'),
    #     protected views
    path('recipes/', RecipesView.as_view(), name="recipes_view"),
    path('search/', SearchView.as_view(), name="search_view"),
    path('lists/', ListsView.as_view(), name="lists_view"),
    path('profile/', ProfileView.as_view(), name="profile_view"),
]
