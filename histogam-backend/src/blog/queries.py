from graphene_django import DjangoObjectType
from .models import *

# Converting the models to graphql types

class PostType(DjangoObjectType):
    class Meta:
        model  = Post
        fields = ['__all__']


class LikeType(DjangoObjectType):
    class Meta:
        model  = Like
        fields = ['__all__']


class CommentType(DjangoObjectType):
    class Meta:
        model  = Comment
        fields = ['__all__']