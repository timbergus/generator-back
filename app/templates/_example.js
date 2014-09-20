(function () {

    'use strict';
    
    var Database = require('../database');
    var Users = Database.models.user;
 
    exports.reset = {
        handler: function (request, reply) {
 
            Database.db.on('error', console.error.bind(console, 'Connection error:'));
     
            // Cleaning the database with sample data.
     
            Users.remove({}, function(err) {
                if (err) throw err;
                console.log('Users deleted!');
            });
     
            //////////////////////////
            // Sample data for clients
            //////////////////////////
     
            var user01 = new Users({
                name: 'User 01 Name',
                surname: 'User 01 Surname',
                email: 'user01@example.com',
                password: '123456'
            }).save();
     
            reply('Database reset!').code(200);
        }
    };
})();