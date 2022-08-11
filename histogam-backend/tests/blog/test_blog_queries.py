import pytest
import requests

query_all_posts_with_likes_and_comments = """
    {
        allPosts{
                id
                title
                content
                postedBy{
                    username
                    email
                }
                likes{
                    user{
                        username
                        email
                    }
                }
                comments{
                    user{
                        username
                        email
                    }
                }
            }
    }
"""

def test_query_all_posts_data_should_return_http_200():
    response = requests.post("http://localhost:8000/api/", json={'query': query_all_posts_with_likes_and_comments})
    assert response.status_code == 200
