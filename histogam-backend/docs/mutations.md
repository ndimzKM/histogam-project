# Overview
    This file houses all the different mutations for a particular app.
    Import .gql_queries for the Query Type


# Creating a mutation
import graphene
from .models import Xxxx
class XxxxType(DjangoObjectType):
    class Meta:
        model = Xxxx # model

class CreateXxxx(graphene.Mutation):
    xxxx = graphene.Field(XxxxType)

    class Arguments:
        xx_string  = graphene.String()
        xx_int     = graphene.String()
        xx_boolean = graphene.Boolean()

    def mutate(self, info, xx_string, xx_int, xx_boolean):
        xxxx = Xxxx(xx_string=xx_string, xx_int=xx_int, xx_boolean=xx_boolean)
        xx.save()
        return CreateXxxx(xxxx=xxxx)

## Arguments
    Attributes are the arguments that the Mutation CreateXxxx needs for resolving, in this case name
    will be the only argument for the mutation.

## Mutate
    Mutate is the function that will be applied once the mutation is called. This method is just a special resolver that we
    can change data within.



# Updating a mutation

class UpdateXxxx(Mutation):
    xxxx = graphene.Field(XxxxType)

    class Arguments:
        xx_id      = Int(required=True) # The id field is required for updating
        xx_string  = graphene.String()
        xx_int     = graphene.String()
        xx_boolean = graphene.Boolean()

    def mutate(self, info, xx_id, xx_string, xx_int, xx_boolean):
        xxxx = Xxxx.objects.get(id=xx_id, xx_string, xx_int, xx_boolean)
        xxxx.xx_string  = xx_string
        xxxx.xx_int     = xx_int
        xxxx.xx_boolean = xx_boolean

        xxxx.save()
        return UpdateXxxx(xxxx = xxxx)



# Deleting a mutation

class DeleteXxxx(Mutation):
    class Arguments:
        xx_id = Int(required=True)

    success = Boolean()

    def mutate(self,info, xx_id):
        xxxx    = Xxxx.objects.get(id=xx_id)
        xxxx.delete()
        return DeleteXxxx(success=True) #Return true if successful
