# Generator-Back [![Build Status](https://secure.travis-ci.org/timbergus/generator-back.png?branch=master)](https://travis-ci.org/timbergus/generator-back) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

> Back end generator for [Yeoman](http://yeoman.io) with [Hapi.js](http://hapijs.com/) and other cool stuff :)

## Getting Started

To start using this generator you need to clone or download it, and link it into the node modules folder of your system. To do this, you need to execute this command into the __generator-back__ project folder:

```
npm link
```

## Creating our API

After linking the generator, we need to create the project folder for our new REST API, and execute inside this new folder:

```
yo back
```

There are a few configuration questions and then a npm package installation. After this, the API is ready to be used. Just launch a local MongoDB server, Redis server and our new app (I asume you have installed [MongoDB](http://www.mongodb.org/) and [Redis](http://redis.io/)):

```
mongod
redis-server
nodemon server.js
```

## Testing our API

To test our API y use Postman. It's easy, it's cool and it's free. Good for me. The steps you can follo are:

### 1. Create a new user

To create a new user, you need to do a POST with an object with the following data:

###### POST

```
http://localhost:5000/signup
```

###### Content

```
{
    "name": "My Name",
    "surname": "My Surename",
    "username": "my_username",
    "email": "my@email.com",
    "password": "123456",
}
```

### 2. Login with your new user

To login to the system, you need to use a GET with the username and password in the query of the call:

###### GET

```
http://localhost:5000/login?username=my_username&password=123456
```

What you get in response is an object with a token. This is your session token and you need it for every protected comunication with the server. The password is only send to the server in the login, and you can also hash it using a md5 to even keep it in the server (I try never to store password in the server, just in case).

###### Response

```
{
    "token": <token value>
}
```

### 3. Check all the user in the database

Or create, update and delete once loged. Because we are going to make a lot of secured calls, we better are going to use a header to store the username and a header to store the toke. The token is the once returned by the login, so use it here.

###### GET

´´´
http://localhost:5000/users
```

###### Headers

__username__ -> my_username

__token__ -> `<token value>`

## The Modules Used

The modules we have used here are the following:

* [hapi](http://hapijs.com/) : This is the wonderfull tool to create the REST routing.
* [good](https://github.com/hapijs/good) : This is a logger tool to see the server log in the terminal.
* [joi](https://github.com/hapijs/joi) : A tool to verify the fields passed to the route.
* [bcrypt](https://www.npmjs.org/package/bcrypt) : To make the encryptation to store the password in the database and to check it when login.
* [mongoose](http://mongoosejs.com/) : Our ODM for MongoDB.
* [redis](https://github.com/mranney/node_redis) : The Redis connection for Node.js.
* [hiredis](https://github.com/mranney/node_redis) : The Redis tools.

## GRUNT Workflow

> Under construction...


## License

MIT

Hope you find it useful :)