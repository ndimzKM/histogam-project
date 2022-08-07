from django.db import models
from django.contrib.auth import get_user_model

class Post(models.Model):
    title      = models.CharField(max_length=200)
    content    = models.TextField()
    image      = models.ImageField(upload_to='images/', blank=True, null=True)
    posted_by  = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Like(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='likes')


class Comment(models.Model):
    user    = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    post    = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    comment = models.TextField(blank=True, null=True)