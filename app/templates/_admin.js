(function () {

    var Database = require('../database');
    var User = Database.models['user'];
    var Crypto = require('crypto');
 
    exports.login = {
        handler: function (request, reply) {
            User.findOne({ username: request.query.username })
            .exec(function (err, user) {
                if (err) throw err;
                if (!user) {
                    reply('Unauthorized!').code(401);
                } else {
                    Database.authenticate(reply, request.query.password, user.password, function () {
                        Crypto.randomBytes(48, function(ex, buf) {
                            var token = buf.toString('hex');
                            Database.RedisClient.set(request.query.username, token, function () {
                                reply({ "token": token }).code(200);
                            });
                        });
                    });
                }
            });
        }
    };

    exports.signup = {
        handler: function (request, reply) {
            var new_client = request.payload;
            User.findOne({ username: new_client.username })
            .exec(function (err, user) {
                if (err) throw err;
                if (!user) {
                    Database.genpass(new_client.password, function (hash) {
                        new_client.password = hash;
                        new User(new_client).save();
                        reply('New user successfully created!').code(201);
                    });
                } else {
                    reply('User already registered!').code(409);
                }
            });
        }
    };

    exports.delete_session = {
        handler: function (request, reply) {
            Database.RedisClient.del(request.query.username, function () {
                reply('Session deleted!').code(200);
            });
        }
    };
})();