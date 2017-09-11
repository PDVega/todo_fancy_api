# Todo Fancy API

## SERVERSIDE (BACKEND)

### Setting route

routes | HTTP | Description
-------|------|------------
/register | POST | Create New User
/login | POST | Access todos application with username and password
/todo/add | POST | Create new todo
/todo | POST | Get all todos, post token on req.body.token (authorized user)
/todo/:id | GET | Get todo by todo_id (authorized user)
/todo/:id | PUT | Update todo by todo_id (authorized user)
/todo/:id | DELETE | Delete todo by todo_id (authorized user)
/todo/:id/toggle | PUT | Update status (done or not yet) todo by todo_id (authorized user)


### For Running the application Step by Step:

      1. Register New Account
      (POST) access to http://localhost:3000/register input on body-urlencoded. Using postman x-www-form-urlencoded
      
      Key | Value | Description
      -------|------|------------
      username | vega | 
      password | vega1 | 
      name | Pella De Vega | 
      email | pdvega@mail.com | 
      
      If you got message 'Register success' congratulation!
      
      
      2. Login using account which have been registered
      (POST) access to http://localhost:3000/login input on body-urlencoded. Using postman x-www-form-urlencoded
      
      Key | Value | Description
      -------|------|------------
      username | vega | 
      password | vega1 | 
      
      If you got message 'username and token' congratulation!
      
      
      3. Create new Todo 
      (POST) access to http://localhost:3000/todo/add input on body-urlencoded. Using postman x-www-form-urlencoded
      
      Key | Value | Description
      -------|------|------------
      task | preparing API todo as server | 
      tags | programming, API | (tags can be inputted more than one and become array)
      token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZlZ2EiLCJpZCI6IjU5YTI4MzM2ZWIzZTQzMWQ1MGU1N2ViNiIsImlhdCI6MTUwMzgyMjY1OX0 | (just example)
      
      The result will be like here:
      ``{
        "__v": 0,
        "updatedAt": "2017-08-27T08:32:02.254Z",
        "createdAt": "2017-08-27T08:32:02.254Z",
        "task": "test task vega",
        "creator": "59a28336eb3e431d50e57eb6",
        "status": false,
        "_id": "59a28382eb3e431d50e57eb7",
        "tags": [
          "belajar",
          "pemrograman"
        ]
      }``

      4. Get all Todo
      (POST) access to http://localhost:3000/todo input on body-urlencoded. Using postman x-www-form-urlencoded.
      
      Why using method POST to get list of todos? Because POST token to get info id user, and show list todos of that user known by token.
      
      Key | Value | Description
      -------|------|------------
      token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZlZ2EiLCJpZCI6IjU5YTI4MzM2ZWIzZTQzMWQ1MGU1N2ViNiIsImlhdCI6MTUwMzgyMjY1OX0 | (just example)
      
      The result will be like here:
      ``[
            {
                "_id": "59a28382eb3e431d50e57eb7",
                "updatedAt": "2017-08-27T08:32:02.254Z",
                "createdAt": "2017-08-27T08:32:02.254Z",
                "task": "test task vega",
                "creator": "59a28336eb3e431d50e57eb6",
                "status": false,
                "__v": 0,
                "tags": [
                    "belajar",
                    "pemrograman"
                ]
            },
            {
                "_id": "59a28c8168c52a26cf5b24de",
                "updatedAt": "2017-08-27T09:10:25.466Z",
                "createdAt": "2017-08-27T09:10:25.466Z",
                "task": "add task sudah berhasil",
                "creator": "59a28336eb3e431d50e57eb6",
                "status": false,
                "__v": 0,
                "tags": [
                    "belajar",
                    "assignment"
                ]
            }
        ]``
        
      5. Get Todo by Todo_id
      (GET) access to http://localhost:3000/todo/59a28c8168c52a26cf5b24de
        
      The result will be like here:
      ``{
          "_id": "59a28c8168c52a26cf5b24de",
          "updatedAt": "2017-08-27T09:10:25.466Z",
          "createdAt": "2017-08-27T09:10:25.466Z",
          "task": "add task sudah berhasil",
          "creator": "59a28336eb3e431d50e57eb6",
          "status": false,
          "__v": 0,
          "tags": [
              "belajar",
              "assignment"
          ]
        }``
      
      6. Update Todo by Todo_id
      (PUT) access to http://localhost:3000/todo/59a28c8168c52a26cf5b24de input on body-urlencoded. Using postman x-www-form-urlencoded
      
      Key | Value | Description
      -------|------|------------
      task | add task sudah berhasil dan mau di edit | 
      tags |  belajar, test | (if tags empty, the result will be default when before edited)
      token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZlZ2EiLCJpZCI6IjU5YTI4MzM2ZWIzZTQzMWQ1MGU1N2ViNiIsImlhdCI6MTUwMzgyMjY1OX0 | (just example)
      
      The result will be like here:
      ``{
          "_id": "59a28c8168c52a26cf5b24de",
          "updatedAt": "2017-08-27T09:57:29.123Z",
          "createdAt": "2017-08-27T09:10:25.466Z",
          "task": "add task sudah berhasil dan mau di edit",
          "creator": "59a28336eb3e431d50e57eb6",
          "status": false,
          "__v": 3,
          "tags": [
              "belajar, test"
          ]
      }``
      
      7. Delete Todo by Todo_id
      (DELETE) access to http://localhost:3000/todo/59a28c8168c52a26cf5b24de
      
      The result will be like here:
      ``{
          "message": "Deleted success!"
        }``
      
      8. Update Status Todo by Todo_id (done or not yet)
      (PUT) access to http://localhost:3000/todo/59a28c8168c52a26cf5b24de/toggle input on body-urlencoded. Using postman x-www-form-urlencoded
      
      Key | Value | Description
      -------|------|------------
      status | true | (before updated status is false) 
      
      The result will be like here:
      ``{
          "_id": "59a28c8168c52a26cf5b24de",
          "updatedAt": "2017-08-27T09:57:29.123Z",
          "createdAt": "2017-08-27T09:10:25.466Z",
          "task": "add task sudah berhasil dan mau di edit",
          "creator": "59a28336eb3e431d50e57eb6",
          "status": true,  <-- status changed
          "__v": 3,
          "tags": [
              "belajar, test"
          ]
      }``



## CLIENTSIDE (FRONTEND)

### Setting route

routes | HTTP | Description
-------|------|------------
/register | POST | Create New User
/login | POST | Access todos application with username and password
/todo/add | POST | Create new todo
/todo | POST | Get all todos, post token on req.body.token (authorized user)
/todo/:id | GET | Get todo by todo_id (authorized user)
/todo/:id | PUT | Update todo by todo_id (authorized user)
/todo/:id | DELETE | Delete todo by todo_id (authorized user)
/todo/:id/toggle | PUT | Update status (done or not yet) todo by todo_id (authorized user)


### For Running the application Step by Step:

      1. Register New Account
      (POST) access to http://localhost:3000/register input on body-urlencoded. Using postman x-www-form-urlencoded
            
      Key | Value | Description
      -------|------|------------
      username | vega | 
      password | vega1 | 
      name | Pella De Vega | 
      email | pdvega@mail.com | 
            
      If you got message 'Register success' congratulation!
