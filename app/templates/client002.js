var io = require('socket.io-client');

var socket = io.connect('http://10.110.2.36:8000/direct', { 'force new connection': true });

socket.on('ping', function () {
	socket.emit('pong', { unique_id: '002' });
	console.log('Ping received in client 002!');
});

socket.on('serverResponse', function (data) {
	console.log(data);
});