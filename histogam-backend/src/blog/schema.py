import graphene
from graphene_django import DjangoListField
from graphene import ObjectType
from .queries import PostType
from .mutations import *


class Query(ObjectType):
    #name of query that gets a list of all post data and stores it as a list of PostType
    all_posts = DjangoListField(PostType)

    #get a single post by id
    post_by_id = graphene.Field(PostType, id=graphene.Int())

    def resolve_post_by_id(self, info, **kwargs):
        id = kwargs.get('id')
        if id is not None:
            return Post.objects.get(pk=id)

    # get a post by title
    post_by_title = graphene.Field(PostType, title=graphene.String())

    def resolve_post_by_title(self, info, **kwargs):
        title = kwargs.get('title')
        if title is not None:
            return Post.objects.get(title=title)


class Mutation(ObjectType):
    create_post = CreatePost.Field()
    update_post = UpdatePost.Field()
    delete_post = DeletePost.Field()

    create_like = CreateLike.Field()

    create_comment = CreateComment.Field()


