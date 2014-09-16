var Hapi = require('hapi');
var Good = require('good');

var Routes = require('./routes');

var server = new Hapi.Server('localhost', parseInt(process.env.PORT, 10) || 5000, {
	cors: {
        origin: ['*'],
        additionalHeaders: ['username', 'token'],
        additionalMethods: ['PATCH']
    }
});

// Just for the log of the server.

server.pack.register(Good, function (err) {
    if (err) {
        throw err;
    }
});

// Routing in three steps:
// 
// * Routing file with the REST services.
// * Routes file with the handlers for the REST services.

server.route(Routes.endpoints);

// Server launch.

server.start(function () {
    server.log('info', 'Server running at: ' + server.info.uri);
});