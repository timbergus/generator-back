(function () {

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
                    User.find({})
                    .sort('name')
                    .exec(function (err, users) {
                        if (err) throw err;
                        reply(users);
                    });
                }
            });
        }
    };

    exports.post_users = {
        handler: function (request, reply) {
            Database.auth(request, reply, function () {
                new User(request.payload).save();
                response.send('Insertion successful!');
            });
        }
    };

    exports.put_users = {
        handler: function (request, reply) {
            Database.auth(request, reply, function () {
                User.find({id: request.params.id})
                .exec(function (err, users) {
                    if (err) throw err;
                    users.forEach(function (user) {
                        user.name = request.body.name;
                        user.surname = request.body.surname;
                        user.site = request.body.site;
                        user.company = request.body.company;
                        user.about = request.body.about;
                        user.preferences = request.body.preferences;
                        user.favorites = request.body.favorites;
                        user.save(function () {
                            reply(user);
                        });
                    });
                });
            });
        }
    };

    exports.delete_users = {
        handler: function (request, reply) {
            Database.auth(request, reply, function () {
                User.findByIdAndRemove(request.params.id, function (err) {
                    if (err) throw err;
                    reply('Entry deleted!');
                });
            });
        }
    };
})();