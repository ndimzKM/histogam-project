from graphene_django import DjangoObjectType
from .models import Post

# Converting our post model to a graphql type
class PostType(DjangoObjectType):
    class Meta:
        model  = Post
        fields = ('__all__')