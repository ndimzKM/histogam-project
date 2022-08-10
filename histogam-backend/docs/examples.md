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
	# Response
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

	# Response
{
	"data": {
		"createUser": {
			"user": {
				"id": "2"
			}
		}
	}
}

## create post mutation
mutation{
	createPost(title:"Test Title2",content:"Test content",image:"image.jpg"){
		post{
			id
			title
			content
		}
	}
}

	# Response
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


## allPosts query
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

	# Response
{
	"data": {
		"allPosts": [
			{
				"id": "1",
				"title": "test title",
				"content": "test content",
				"postedBy": {
					"username": "test1",
					"email": "test1@gmail.com"
				},
				"likes": [
					{
						"user": {
							"username": "test1",
							"email": "test1@gmail.com"
						}
					}
				],
				"comments": [
					{
						"user": {
							"username": "test1",
							"email": "test1@gmail.com"
						}
					}
				]
			},
			{
				"id": "2",
				"title": "Test Title2",
				"content": "Test content",
				"postedBy": {
					"username": "test1",
					"email": "test1@gmail.com"
				},
				"likes": [],
				"comments": []
			}
		]
	}
}


## postByID query
{
	postById(id:1){
		title
		content
		postedBy{
			username
		}
	}
}

	# Response
{
	"data": {
		"postById": {
			"title": "test title",
			"content": "test content",
			"postedBy": {
				"username": "test1"
			}
		}
	}
}


## postByTitle query
{
	postByTitle(title:"test title"){
		title
		content
	}
}

	# Response
{
	"data": {
		"postByTitle": {
			"title": "test title",
			"content": "test content"
		}
	}
}