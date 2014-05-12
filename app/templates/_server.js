var express = require('express');
var routes = require('./routes/routes.js');

var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

app.use(morgan());
app.use(bodyParser());




var Q = require("q");

var defer = Q.defer();
var promise = defer.promise;

// flujo

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

// estado

defer.resolve(9);





io.sockets.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});



app.get('/', routes.index);




app.use(function (req, res, next) {
    res.send(404, 'Error 404');
});

app.use(function (err, req, res, next) {
    res.send(500, 'Server error');
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log("Server's working at: http://localhost:" + port);
});