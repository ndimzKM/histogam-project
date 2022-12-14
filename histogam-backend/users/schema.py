from django.contrib.auth import get_user_model
import graphene
from graphene_django import DjangoObjectType
from graphql import GraphQLError

class UserType(DjangoObjectType):
    class Meta:
        model  = get_user_model()


class CreateUser(graphene.Mutation):
    user = graphene.Field(UserType)

    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)
        email    = graphene.String(required=True)

    def mutate(self, info, username, password, email):
        user = get_user_model()(
            username=username,
            password=password,
            email=email
            )
        user.set_password(password)
        user.save()

        return CreateUser(user=user)


class Query(graphene.ObjectType):
    # me query is used to get the current logged in user
    me = graphene.Field(UserType)

    def resolve_me(self, info):
        user = info.context.user
        if user.is_anonymous:
            raise GraphQLError('Not logged in!')
        return user

    # get list of all users
    all_users = graphene.List(UserType)

    def resolve_all_users(self, info):
        return get_user_model().objects.all()

    # get user by id
    user_by_id = graphene.Field(UserType, id=graphene.Int(required=True))

    def resolve_user_by_id(self, info, id):
        return get_user_model().objects.get(id=id)

    # get user by username
    user_by_username = graphene.Field(UserType, username=graphene.String(required=True))

    def resolve_user_by_username(self, info, username):
        return get_user_model().objects.get(username=username)

class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()