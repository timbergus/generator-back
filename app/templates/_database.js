var Mongoose = require('mongoose');
var Redis = require('redis');
var Bcrypt = require('Bcrypt');
var Config = require('./config');

// Local connection.

Mongoose.connect('mongodb://' + Config.mongo.url + '/' + Config.mongo.database);

var RedisClient = Redis.createClient();

// Remote connection.

// Mongoose.connect('mongodb://' +
//                 Config.mongo.username +
//                 ':' +
//                 Config.mongo.password +
//                 '@' +
//                 Config.mongo.url +
//                 '/' +
//                 Config.mongo.database);

// var RedisClient = Redis.createClient(15488, Config.redis.url, {
//     no_ready_check: true
// });
  
// RedisClient.auth(Config.redis.auth, function() {
//     console.log('Redis client connected');
// });

var db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function callback() {
    console.log("Connection to MongoDB succeeded.");
});

var models = require('./models/models')(Mongoose);

RedisClient.on("error", function (err) {
    console.log("Error " + err);
});

// This is the authentication function. Basically it checks if there is a sessio opened
// in Redis and if the token passed in the header is the same that the one stored in
// Redis. If it is the case, we do the callback, if not, then we return a 401 code.

var auth = function (request, reply, callback) {
    RedisClient.get(request.headers.username, function (err, data) {
        if (!data || request.headers.token !== data) {
            reply('Unauthorized!').code(401);
        } else {
            callback();
        }
    });
};

exports.RedisClient = RedisClient;
exports.Mongoose = Mongoose;
exports.models = models;
exports.auth = auth;
exports.db = db;

// Password encryptation functions.

var genpass = function (password, callback) {
    Bcrypt.genSalt(10, function(err, salt) {
        Bcrypt.hash(password, salt, function(err, hash) {
            if (err) {
                throw err;
            }
            callback(hash);
        });
    });
};

var authenticate = function (reply, password, stored_password, callback) {

    Bcrypt.compare(password, stored_password, function (err, isValid) {
        if (err) {
            throw err;
        }
        if (isValid) {
            callback();
        } else {
            reply('Unauthorized!').code(401);
        }
    });
};

exports.genpass = genpass;
exports.authenticate = authenticate;

// WEBSOCKETS

var io = require('socket.io').listen(3000);

io.sockets.on('connection', function (socket) {

    setInterval(function () {
        socket.emit('ping', 'PING!!');
    }, 2000);

    socket.on('pong', function (message) {
        console.log(message);
    });

    socket.on('disconnect',function() {
        console.log('Socket disconnected!');
    });
});

exports.io = io;