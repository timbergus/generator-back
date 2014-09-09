var io_client = require('socket.io-client');

var socket = io_client.connect('http://localhost:3000/', { 'force new connection': true });

socket.on('ping', function (message) {
    console.log(message);
    socket.emit('pong', 'PONG!!');
});