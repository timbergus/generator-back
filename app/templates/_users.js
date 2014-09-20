(function () {

    'use strict';

    var Database = require('../database');
    var User = Database.models['user'];

    exports.get_users = {
        handler: function (request, reply) {
            Database.auth(request, reply, function () {
                if (request.params.id) {
                    User.find({id: request.params.id})
                    .exec(function (err, user) {
                        if (err) throw err;
                        reply(user);
                    });
                } else {
                    if (request.query.name) {
                        User.find({ name: request.query.name })
                        .sort('name')
                        .exec(function (err, users) {
                            if (err) throw err;
                            reply(users);
                        });
                    } else {
                        User.find({})
                        .sort('name')
                        .exec(function (err, users) {
                            if (err) throw err;
                            reply(users);
                        });
                    }
                }
            });
        }
    };

    exports.post_users = {
        handler: function (request, reply) {
            Database.auth(request, reply, function () {
                new User(request.payload).save();
                reply('Insertion successful!');
            });
        }
    };

    exports.put_users = {
        handler: function (request, reply) {
            Database.auth(request, reply, function () {
                User.findOne({ username: request.params.username })
                .exec(function (err, user) {
                    if (err) throw err;
                    if (user) {
                        user.name     = request.payload.name;
                        user.surname  = request.payload.surname;
                        user.email    = request.payload.email;
                        user.password = request.payload.password;
                        user.save(function () {
                            reply(user);
                        });
                    } else {
                        reply('User not found!').code(404);
                    }
                });
            });
        }
    };

    exports.delete_users = {
        handler: function (request, reply) {
            Database.auth(request, reply, function () {
                User.findOne({ username: request.params.username })
                .remove(function (err) {
                    if (err) throw err;
                    reply('Entry deleted!');
                });
            });
        }
    };
})();