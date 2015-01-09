(function () {

    'use strict';

    var Hapi    = require('hapi'),
        Good    = require('good'),
        Console = require('good-console'),
        Routes  = require('./routes'),
        server  = new Hapi.Server();

    server.connection({
        host: 'localhost',
        port: parseInt(process.env.PORT, 10) || 5000,
        routes: {
            cors: {
                origin: ['*'],
                additionalHeaders: ['username', 'token'],
                additionalMethods: ['PATCH']
            }
        }
    });

    // Routing in three steps:
    // 
    // * Routing file with the REST services.
    // * Routes file with the handlers for the REST services.

    server.route(Routes.endpoints);

    // Just for the log of the server.

    server.register({
        register: Good,
        options: {
            reporters: [{
                reporter: Console,
                args:[{ log: '*', response: '*' }]
            }]
        }
     }, function (err) {
        if (err) {
            console.log('Failed loading plugin');
        }

        // Server is launched if plugins are loaded.

        server.start(function () {
            server.log('info', 'Server running at: ' + server.info.uri);
        });
    });
}());