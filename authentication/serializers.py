# pylint
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from rest_framework import serializers
from .models import CustomUser


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    """
    adding custom fields to users.
    """
    @classmethod
    def get_token(cls, user):
        token = super(MyTokenObtainPairSerializer, cls).get_token(user)

        # Add custom claims
        token['fav_cuisine'] = user.fav_cuisine
        return token


class CustomJWTSerializer(TokenObtainPairSerializer):
    """
    Allowing Login via username OR email field.
    """

    def validate(self, attrs):
        credentials = {
            'username': '',
            'password': attrs.get("password")
        }
        user_obj = CustomUser.objects.filter(email=attrs.get("username")).first(
        ) or CustomUser.objects.filter(username=attrs.get("username")).first()
        if user_obj:
            credentials['username'] = user_obj.username

        return super().validate(credentials)


class CustomUserSerializer(serializers.ModelSerializer):
    """
    Currently unused in preference of the below.
    """
    email = serializers.EmailField(
        required=True
    )
    username = serializers.CharField()
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = CustomUser
        fields = ('email', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        # as long as the fields are the same, we can just use this
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
