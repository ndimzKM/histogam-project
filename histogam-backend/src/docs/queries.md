# List of queries


## Current user logged in

{
    me{
        id
        username
        email
        password
    }
}
{
	"data": {
		"me": {
			"id": "1",
			"username": "test1",
			"email": "test1@gmail.com",
			"password": "pbkdf2_sha256$260000$WVMBCtiNEt4UMemFWOfnAf$4pk7dvE7BgJ8/GFKJPoRDt5Fx+FU3mmgUMAVBSHwTTE="
		}
	}
}

## create user query
mutation{
	createUser(username:"test2",email:"test2@gmail.com",password:"Test@Test123"){
		user{
			id
		}
	}
}
{
	"data": {
		"createUser": {
			"user": {
				"id": "2"
			}
		}
	}
}

## create post query
mutation{
	createPost(title:"Test Title2",content:"Test content",image:"image.jpg"){
		post{
			id
			title
			content
		}
	}
}
{
	"data": {
		"createPost": {
			"post": {
				"id": "2",
				"title": "Test Title2",
				"content": "Test content"
			}
		}
	}
}