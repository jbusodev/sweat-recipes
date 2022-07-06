# Obtain Token imports
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status, permissions
# Blacklist Token imports
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView

from .serializers import MyTokenObtainPairSerializer, CustomUserSerializer, CustomJWTSerializer


# Token create
class ObtainTokenPairWithCuisineView(TokenObtainPairView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = MyTokenObtainPairSerializer


class ObtainTokenPairWithEmailView(TokenObtainPairView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = CustomJWTSerializer


# Logout
class LogoutAndBlacklistRefreshTokenForUserView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


# Create Custom User


class CustomUserCreate(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request, format='json'):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Protected Views


class HelloWorldView(APIView):

    def get(self, request):
        return Response(data={"query": "world"}, status=status.HTTP_200_OK)


class RecipesView(APIView):

    def get(self, request):
        return Response(data={"query": "recipes"}, status=status.HTTP_200_OK)


class SearchView(APIView):

    def get(self, request):
        return Response(data={"query": "search"}, status=status.HTTP_200_OK)


class ListsView(APIView):

    def get(self, request):
        return Response(data={"query": "lists"}, status=status.HTTP_200_OK)


class ProfileView(APIView):

    def get(self, request):
        return Response(data={"query": "profile"}, status=status.HTTP_200_OK)
