from graphene import ObjectType, String, Int, List, Field, ID, Mutation, Boolean
from graphene_django.forms.mutation import DjangoModelFormMutation
from .models import Post
from .queries import PostType


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

class UpdatePost(Mutation):
    Post = Field(PostType)

    class Arguments:
        id = Int(required=True)
        title   = String()
        content = String()
        image   = String()

    def mutate(self, info, id, title, content, image):
        user = info.context.user

        if user.is_anonymous:
            raise Exception('Log in to update content')

        post = Post.objects.get(id=id)

        if post.posted_by != user:
            raise Exception('Cannot update content posted by another user')

        post.title   = title
        post.content = content
        post.image   = image

        post.save()

        return UpdatePost(Post=post)


class DeletePost(Mutation):
    delete_post = Field(PostType)

    success     =  Field(Boolean)

    class Arguments:
        id = Int(required=True)

    def mutate(self, info, id):
        user = info.context.user

        if user.is_anonymous:
            raise Exception('Log in to delete content')

        post = Post.objects.get(id=id)

        if post.posted_by != user:
            raise Exception('Cannot delete content posted by another user')

        post.delete()

        return DeletePost(success=True)


