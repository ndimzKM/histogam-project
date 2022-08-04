from django.contrib import admin
from .models import Post


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display       = ['title', 'created_at', 'updated_at']
    list_display_links = ['title']
    list_filter        = ['created_at']
    search_fields      = ['title', 'content']



