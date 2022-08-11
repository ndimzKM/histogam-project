# Overview
    All the queries and mutations are initialized in here



## All Queries
```
from .models import *
from .gql_queries import *
from .gql_mutations import *
import graphene
class Query(ObjectType):

    # for uniformity all list queries start with keyword "all_"
    all_xxxx = graphene.List(XxxxType)

    def resolve_all_xxxx(self, info):
        return Xxxx.objects.all()

    xxxx_by_id = graphene.Field(XxxxType, id)

    def resolve_xxxx_by_id(self, info, id):
        return Xxxx.objects.get(id = id)


# All Mutations
class Mutation(ObjectType):

    #All the mutations created in .gql_mutations are called below
    create_xxxx = CreateXxxx.Field()
    update_xxxx = UpdateXxxx.Field()
    delete_xxxx = DeleteXxxx.Field()
    
```
