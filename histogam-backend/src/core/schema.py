import graphene
from blog import schema

# Maps the blog model schema to the core schema that is referenced in settings.py
class Query(schema.Query, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query)