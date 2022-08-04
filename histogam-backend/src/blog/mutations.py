from graphene import ObjectType, String, Int, List, Field, ID, Mutation
from graphene_django.forms.mutation import DjangoModelFormMutation
from .models import Post
from .queries import PostType
from .forms import PostForm


class CreatePost(DjangoModelFormMutation):
    class Meta:
        form_class        = PostForm
        model             = Post
        return_field_name = 'post'


