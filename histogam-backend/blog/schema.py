import graphene
from graphene import ObjectType
from .queries import PostType
from .mutations import *
from django.db.models import Q


class Query(ObjectType):
    #this query gets a list of all posts in the database
    #and also a full search text function for all fields in the post model
    all_posts = graphene.List(PostType, search = graphene.String())

    def resolve_all_posts(self,info, search=None):
        if search:
            filter = (
                Q(title__icontains=search) |
                Q(content__icontains=search) |
                Q(posted_by__username__icontains=search) |
                Q(posted_by__username__icontains=search)
            )

            return Post.objects.filter(filter)

        return Post.objects.all()


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

    all_likes = DjangoListField(LikeType)


class Mutation(ObjectType):
    create_post    = CreatePost.Field()
    update_post    = UpdatePost.Field()
    delete_post    = DeletePost.Field()

    create_like    = CreateLike.Field()

    create_comment = CreateComment.Field()


