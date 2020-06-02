# Defangi
Defangi is an empty project framework created with nodejs.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing
purposes.

## Installing
``` 
cd defangi
npm install
```

## Running This Project
Set .env file with your MongoURI and Jwt_Secret_Key.
``` 
npm start
```
## Authentication Routes

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/auth/register | `POST` | {'username':'defangi','password':'12345'} | Register a new user. |
| /api/user/login | `POST` | {'username':'defangi','password':'12345'} | Login a user. |


## User Routes
| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/user/getAll | `GET` | Empty | List all user. |
| /api/user/get | `GET` | {'id':'mongodb object id'} | Get one user. |
| /api/user/new | `POST` | {'username':'defangi',,'password':'12345'} | Create a new user. |
| /api/user/update | `PUT` | {'username':'defangi1','password':'12345'} | Create a new user. |
| /api/user/delete | `DELETE` | {'id':'mongodb object id'} | Delete a user. |

## License
This project is licensed under the MIT License - see the LICENSE.md file for details
