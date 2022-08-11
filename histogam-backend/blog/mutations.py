from graphene import ObjectType, String, Int, List, Field, ID, Mutation, Boolean
from .models import *
from .queries import *
from users.schema import UserType
from graphql import GraphQLError

# region post mutations

class CreatePost(Mutation):
    post = Field(PostType)

    class Arguments:
        title   = String(required=True)
        content = String(required=True)
        image   = String()

    def mutate(self, info, title, content, image):

        user = info.context.user

        if user.is_anonymous:
            raise GraphQLError('Log in to post content')

        post = Post(title=title, content=content, image=image, posted_by=user)

        post.save()

        return CreatePost(post=post)

class UpdatePost(Mutation):
    Post = Field(PostType)

    class Arguments:
        id      = Int(required=True)
        title   = String()
        content = String()
        image   = String()

    def mutate(self, info, id, title, content, image):
        user = info.context.user

        if user.is_anonymous:
            raise GraphQLError('Log in to update content')

        post = Post.objects.get(id=id)

        if post.posted_by != user:
            raise GraphQLError('Cannot update content posted by another user')

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
            raise GraphQLError('Log in to delete content')

        post = Post.objects.get(id=id)

        if post.posted_by != user:
            raise GraphQLError('Cannot delete content posted by another user')

        post.delete()

        return DeletePost(success=True)

#endregion

#region like mutations

class CreateLike(Mutation):
    user = Field(UserType)
    post = Field(PostType)

    class Arguments:
        post_id = Int(required = True)

    def mutate(self, info, post_id):
        user = info.context.user

        if user.is_anonymous:
            raise GraphQLError('Login to like post.')

        post = Post.objects.get(id = post_id)

        if not post:
            raise GraphQLError('Post cannot be found')

        Like.objects.create(user=user, post=post)

        return CreateLike(user=user, post=post)
#endregion

#region comments mutations

class CreateComment(Mutation):
    user = Field(UserType)
    post = Field(PostType)

    class Arguments:
        post_id = Int(required = True)
        comment = String(required = True)

    def mutate(self, info, post_id, comment):
        user = info.context.user

        if user.is_anonymous:
            raise GraphQLError('Login to comment on post.')

        post = Post.objects.get(id = post_id)

        if not post:
            raise GraphQLError('Post cannot be found')

        Comment.objects.create(user=user, post=post, comment=comment)

        return CreateComment(user=user, post=post)

#endregion