import graphene
from graphene import ObjectType
from graphene_django import DjangoObjectType
from .models import P

#Converting our recipe model to a graphql type
class RecipeType(DjangoObjectType):
    class Meta:
        model = Recipe
        # All fields in our model
        fields = ('__all__')

class Query(ObjectType):
    #name of query that gets a list of all the recipe data and stores it as a list
    all_recipes = graphene.List(RecipeType)

     #A resolver populates the data in your schema.
    def resolve_all_recipes(self, info):
        return Recipe.objects.all()
