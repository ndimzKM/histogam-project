from graphene import ObjectType, String, Int, List, Field, ID, Mutation
from graphene_django.forms.mutation import DjangoModelFormMutation
from .models import Post
from .queries import PostType
from .forms import PostForm


class CreatePost(Mutation):
    create_post = Field(PostType)

    class Arguments:
        title   = String(required=True)
        content = String(required=True)
        image   = String()

    def mutate(self, info, title, content, image):

        user = info.context.user

        if user.is_anonymous:
            raise Exception('Log in to post content')

        post = Post(title=title, content=content, image=image, posted_by=user)

        post.save()

        return CreatePost(create_post=post)



