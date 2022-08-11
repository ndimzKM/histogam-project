import graphene
from blog import schema
import users.schema
import graphql_jwt


# Maps the blog model schema to the core schema that is referenced in settings.py
class Query(users.schema.Query,schema.Query, graphene.ObjectType):
    pass

class Mutation(users.schema.Mutation,schema.Mutation, graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)