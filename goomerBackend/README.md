# Goomer Test

## Summary

- [Dependencies](#dependencies)
- [Installation](#installation)
- [Setup](#setup)
- [Running](#running)
- [API](#api)
    - [Users](#users)
        - [Add new User](#add-new-user)
        - [Get all Users](#get-all-users)
        - [Get User by Username](#get-user-by-username)
        - [Update existing User](#update-existing-user)
        - [Delete User](#delete-user)
        - [Get User groups](#get-user-groups)
    - [Groups](#groups)
        - [Add new Group](#add-new-group)
        - [Get all Groups](#get-all-groups)
        - [Get Group by id](#get-group-by-id)
        - [Update existing Group](#update-existing-group)
        - [Delete Group](#delete-group)
        - [Add User to group](#get-user-groups)

## Dependencies

The project requires only [NodeJs](www.nodejs.org)

## Installation

Clone the repository:

```shell
git clone https://github.com/JuanAlmeida12/goomer.git
```

Open prompt/bash into repository directory and run the following command:
```shell
npm install
```
or just:
```shell
npm i
```
Now you are able to run the server.

## Setup

It is necessary to change the `database` values ​​in config files on `/config` folder for the Api works properly.

## Running

The server can be started on two modes:
### Development
In development mode the server runs using ```nodemon```, which is a simple monitor script for use in development.

To run in this mode, run the following command:
```shell
npm run dev
```

### Production
In production mode the server runs using ```pm2```, which is a production process manager.

To run in this mode, run the following command:
```shell
npm run production
```

## API
### Users
#### Add new User
```
POST /api/v1/user
```
##### Parameters
| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | **Required**. `String` with user name information. |
| `username` | `String` | **Required**. `String` with user identifier. |
| `email` | `String` | **Required**. `String` with user email. |
| `password` | `String` | **Required**. `String` with user password. |
| `groups` | `Array<ObjectId>` | `Array` with user groups. |

##### Exemple
```json
{
	"name": "Juan Almeida",
	"username": "juan",
	"email": "juan.satyro@gmail.com",
	"password": "123"
}
```

##### Response
```
Status: 201 Created
```
```json
{
    "groups": [],
    "_id": "5c381a34ebe6e652c4e2d26d",
    "name": "Juan Almeida",
    "username": "juan",
    "email": "juan.satyro@gmail.com",
    "password": "123",
    "createdAt": "2019-01-11T04:23:16.350Z",
    "__v": 0
}
```

#### Get all Users

```
GET /api/v1/user
```
##### Response
```
Status: 200 OK
```
```json
[
    {
        "groups": [
            "5c381e6ac7c76552e0a886b8"
        ],
        "_id": "5c381a34ebe6e652c4e2d26d",
        "name": "Juan Almeida",
        "username": "juan",
        "email": "juan.satyro@gmail.com",
        "password": "123",
        "createdAt": "2019-01-11T04:23:16.350Z",
        "__v": 0
    }
]
```

#### Get User by Username
```
GET /api/v1/user/{username}
```
##### Response
```
Status: 200 OK
```
```json
{
    "groups": [
        "5c381e6ac7c76552e0a886b8",
    ],
    "_id": "5c381a34ebe6e652c4e2d26d",
    "name": "Juan Almeida",
    "username": "juan",
    "email": "juan.satyro@gmail.com",
    "password": "123",
    "createdAt": "2019-01-11T04:23:16.350Z",
    "__v": 0
}
```

#### Update existing User
```
PUT /api/v1/user/{username}
```

##### Parameters
| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | `String` with user name information. |
| `username` | `String` | `String` with user identifier. |
| `email` | `String` | `String` with user email. |
| `password` | `String` | `String` with user password. |
| `groups` | `Array<ObjectId>` | `Array` with user groups. |

##### Exemple
```json
{
	"name": "Juan Almeida 2",
	"username": "juan",
	"email": "juan.satyro@gmail.com",
	"password": "123"
}
```

##### Response
```
Status: 201 Created
```
```json
{
    "n": 1,
    "nModified": 0,
    "opTime": {
        "ts": "6636921033028796417",
        "t": 5
    },
    "electionId": "7fffffff0000000000000005",
    "ok": 1,
    "operationTime": "6636921033028796417",
    "$clusterTime": {
        "clusterTime": "6636921033028796417",
        "signature": {
            "hash": "FSDQnbkFIROjK0IatHbAHuajwZ0=",
            "keyId": "6580393602646540290"
        }
    }
}
```


#### Delete User
```
DELETE /api/v1/user/{username}
```
##### Response
```
Status: 203
```
```json
{
    "n": 1,
    "opTime": {
        "ts": "6636922136835391489",
        "t": 5
    },
    "electionId": "7fffffff0000000000000005",
    "ok": 1,
    "operationTime": "6636922136835391489",
    "$clusterTime": {
        "clusterTime": "6636922136835391489",
        "signature": {
            "hash": "6xdyM66LXtEajmu8AGFDR8Fjkf0=",
            "keyId": "6580393602646540290"
        }
    }
}
```

#### Get User groups
```
GET /api/v1/user/{username}/groups
```
##### Response
```
Status: 200
```
```json
[
    {
        "members": [
            "5c381a34ebe6e652c4e2d26d",
            "5c381a34ebe6e652c4e2d26d",
            "5c381a34ebe6e652c4e2d26d",
            "5c381a34ebe6e652c4e2d26d",
            "5c381a34ebe6e652c4e2d26d",
            "5c381a34ebe6e652c4e2d26d",
            "5c381a34ebe6e652c4e2d26d",
            "5c381a34ebe6e652c4e2d26d",
            "5c381a34ebe6e652c4e2d26d",
            "5c381a34ebe6e652c4e2d26d",
            "5c381a34ebe6e652c4e2d26d",
            "5c381a34ebe6e652c4e2d26d"
        ],
        "_id": "5c381e6ac7c76552e0a886b8",
        "name": "Grupo de Jogos",
        "createdAt": "2019-01-11T04:41:14.185Z",
        "__v": 0
    }
]
```
### Groups
#### Add new Groups
```
POST /api/v1/groups
```
##### Parameters
| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | **Required**. `String` with group name information. |
| `members` | `Array<ObjectId>` | **Required**.`Array` with users of the group.`minimun lenght of group is 2` |

##### Exemple
```json
{
	"name": "Grupo de Jogos",
	"members": [ "<ObjectId>", "<ObjectId>" ]
}
```

##### Response
```
Status: 201 Created
```
```json
{
    "members": [ "<ObjectId>", "<ObjectId>" ],
    "_id": "5c381a34ebe6e652c4e2d26d",
    "name": "Grupo de Jogos",
    "createdAt": "2019-01-11T04:23:16.350Z",
    "__v": 0
}
```

#### Get all Users

```
GET /api/v1/groups
```
##### Response
```
Status: 200 OK
```
```json
[
    {
        "members": [
            "5c381a34ebe6e652c4e2d26d"
        ],
        "_id": "5c381e6ac7c76552e0a886b8",
        "name": "Grupo de Jogos",
        "createdAt": "2019-01-11T04:41:14.185Z",
        "__v": 0
    },
    {
        "members": [],
        "_id": "5c3824940870c332ac83449f",
        "name": "Grupo de Jogos",
        "createdAt": "2019-01-11T05:07:32.104Z",
        "__v": 0
    }
]
```

#### Get Group by Id
```
GET /api/v1/groups/{id}
```
##### Response
```
Status: 200 OK
```
```json
{
    "members": [
        "5c381a34ebe6e652c4e2d26d"
    ],
    "_id": "5c381e6ac7c76552e0a886b8",
    "name": "Grupo de Jogos",
    "createdAt": "2019-01-11T04:41:14.185Z",
    "__v": 0
}
```

#### Update existing Group
```
PUT /api/v1/groups/{id}
```

##### Parameters
| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | `String` with user name information. |
| `members` | `Array<ObjectId>` | `Array` with user groups. |

##### Exemple
```json
{
	"name": "Grupo de Jogos 2"
}
```

##### Response
```
Status: 200 OK
```
```json
{
    "members": [
        "5c381a34ebe6e652c4e2d26d",
        "5c381a34ebe6e652c4e2d26d",
        "5c381a34ebe6e652c4e2d26d",
        "5c381a34ebe6e652c4e2d26d",
        "5c381a34ebe6e652c4e2d26d",
        "5c381a34ebe6e652c4e2d26d",
        "5c381a34ebe6e652c4e2d26d",
        "5c381a34ebe6e652c4e2d26d",
        "5c381a34ebe6e652c4e2d26d",
        "5c381a34ebe6e652c4e2d26d",
        "5c381a34ebe6e652c4e2d26d",
        "5c381a34ebe6e652c4e2d26d"
    ],
    "_id": "5c381e6ac7c76552e0a886b8",
    "name": "Grupo de Jogos 2",
    "createdAt": "2019-01-11T04:41:14.185Z",
    "__v": 0
}
```


#### Delete Group
```
DELETE /api/v1/groups/{id}
```
##### Response
```
Status: 203
```
```json
{
    "members": [
        "5c381a34ebe6e652c4e2d26d",
        "5c381a34ebe6e652c4e2d26d",
        "5c381a34ebe6e652c4e2d26d",
        "5c381a34ebe6e652c4e2d26d",
        "5c381a34ebe6e652c4e2d26d",
        "5c381a34ebe6e652c4e2d26d",
        "5c381a34ebe6e652c4e2d26d",
        "5c381a34ebe6e652c4e2d26d",
        "5c381a34ebe6e652c4e2d26d",
        "5c381a34ebe6e652c4e2d26d",
        "5c381a34ebe6e652c4e2d26d",
        "5c381a34ebe6e652c4e2d26d"
    ],
    "_id": "5c381e6ac7c76552e0a886b8",
    "name": "Grupo de Jogos 2",
    "createdAt": "2019-01-11T04:41:14.185Z",
    "__v": 0
}
```

#### Add User to group
##### Parameters
| Name | Type | Description |
| --- | --- | --- |
| `userId` | `String` | `String` with user name id. |

```
POST /api/v1/groups/{id}/addUser
```
##### Response
```
Status: 200
```
```json
{
    "group": {
        "members": [
            "5c381a34ebe6e652c4e2d26d"
        ],
        "_id": "5c3824940870c332ac83449f",
        "name": "Grupo de Jogos",
        "createdAt": "2019-01-11T05:07:32.104Z",
        "__v": 0
    },
    "user": {
        "groups": [
            "5c3824940870c332ac83449f"
        ],
        "_id": "5c381a34ebe6e652c4e2d26d",
        "name": "Juan Almeida",
        "username": "juan",
        "email": "juan.satyro@gmail.com",
        "password": "123",
        "createdAt": "2019-01-11T04:23:16.350Z",
        "__v": 0
    }
}
```