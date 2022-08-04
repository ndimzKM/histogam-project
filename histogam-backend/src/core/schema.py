import graphene
from blog import schema
import users.schema


# Maps the blog model schema to the core schema that is referenced in settings.py
class Query(users.schema.Query,schema.Query, graphene.ObjectType):
    pass

class Mutation(users.schema.Mutation,schema.Mutation, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)