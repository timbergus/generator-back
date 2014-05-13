var Q = require("q");
var express = require('express');
var routes = require('./routes/routes.js');

var defer = Q.defer();
var promise = defer.promise;




// Promise example.

promise.then(function(val) {
    console.log("val:", val);
    if (val > 10) {
        return true;
    } else {
        return false;
    };
}, function(err) {
    console.log("Error!");
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





var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);

app.use(morgan());
app.use(bodyParser());

var socketsOpened = {};

io.of('/direct').on('connection', function (socket) {

    socket.emit('ping');

    socket.on('pong',function (data) {
        socket.unique_id = data.unique_id;
        socketsOpened[data.unique_id] = socket;
        console.log(socketsOpened);
        console.log(data);
    });

    socket.on('disconnect',function() {
        console.log('Socket disconected!');
    });
});

app.get('/', routes.index);

app.get('/sockets/:unique_id', function (request, response) {
    var unique_id = request.params.unique_id;
    socketsOpened[unique_id].emit('serverResponse', 'Well done!');
    response.send('Done!');
});


var serverHandler = {
    testCall: function () {
        var options = {
            host: '10.110.2.142',
            port: 80,
            path: '/admin/users',
            method: 'GET'
        };

        var req = http.request(options, function (res) {
            console.log('STATUS: ' + res.statusCode);
            console.log('HEADERS: ' + JSON.stringify(res.headers));
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                console.log('BODY: ' + chunk);
            });
        });

        req.on('error', function(e) {
            console.log('problem with request: ' + e.message);
        });

        req.end();
    }
};

serverHandler.testCall();





app.use(function (req, res, next) {
    res.send(404, 'Error 404');
});

app.use(function (err, req, res, next) {
    res.send(500, 'Server error');
});

var port = process.env.PORT || 8000;

server.listen(port, function () {
    console.log("Server's working at: http://localhost:" + port);
});