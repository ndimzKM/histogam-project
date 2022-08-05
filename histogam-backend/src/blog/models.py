from django.db import models
from django.contrib.auth import get_user_model

class Post(models.Model):
    title      = models.CharField(max_length=200)
    content    = models.TextField()
    image      = models.ImageField(upload_to='images/', blank=True, null=True)
    posted_by  = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title