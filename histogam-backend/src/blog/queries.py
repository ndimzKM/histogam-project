from graphene_django import DjangoObjectType
from .models import *

# Converting the models to graphql types

class PostType(DjangoObjectType):
    class Meta:
        model  = Post



class LikeType(DjangoObjectType):
    class Meta:
        model  = Like



class CommentType(DjangoObjectType):
    class Meta:
        model  = Comment

