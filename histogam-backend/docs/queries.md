# Overview
    This file creates all the types to query types example :-

```
from graphene_django import DjangoObjectType
from .models import *

class XxxxType(DjangoObjectType):
    class Meta:
        model  = XxxxType
        fields = '__all__'
```
