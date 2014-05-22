/*jslint node: true */
'use strict';

var Q             = require("q"),
    http          = require('http'),
    crypto        = require('crypto'),
    express       = require('express'),
    routes        = require('./routes/routes.js')(),
    serverHandler = require('./tools/serverHandler.js')(http),
    morgan        = require('morgan'),
    bodyParser    = require('body-parser'),

    defer         = Q.defer(),
    promise       = defer.promise,

    app           = express(),

    server        = http.createServer(app),
    io            = require('socket.io').listen(server),

    ioclient      = require('socket.io-client'),
    demoClientSIO = require('./tools/demoClientSIO.js')(ioclient),

    socketsOpened = {};

// Promise example.

promise.then(function (val) {
    console.log("val:", val);
    if (val > 10) {
        return true;
    }
    return false;
}, function (err) {
    console.log(err);
}).then(function (val) {
    if (val) {
        console.log('Hecho!');
    } else {
        throw new Error('Demasiado bajo!');
    }
}).fail(function (error) {
    console.log(error);
});

defer.resolve(42);

app.use(morgan());
app.use(bodyParser());

io.of('/direct').on('connection', function (socket) {

    socket.emit('ping');

    socket.on('pong', function (data) {
        socket.unique_id = data.unique_id;
        socketsOpened[data.unique_id] = socket;
        console.log(data);
    });

    socket.on('disconnect', function () {
        console.log('Socket disconected!');
    });
});

app.get('/', routes.index);

app.get('/sockets/:unique_id', function (request, response) {
    var unique_id = request.params.unique_id;
    socketsOpened[unique_id].emit('serverResponse', 'Well done!');
    response.send('Done!');
});

serverHandler.testCall();
demoClientSIO.testSocket();

/*jslint unparam: true */
app.use(function (err, req, res, next) {
    res.send(404, 'Error 404');
});
/*jslint unparam: false */

/*jslint unparam: true */
app.use(function (err, req, res, next) {
    res.send(500, 'Server error' + err);
});
/*jslint unparam: false */

var port = process.env.PORT || 5000;

server.listen(port, function () {
    console.log("Server's working at: http://localhost:" + port);
});