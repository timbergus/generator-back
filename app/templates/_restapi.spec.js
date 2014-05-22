var request = require('request');
var io      = require('socket.io-client');

describe('My REST API', function() {
    it('should respond to GET(/) with "index"', function(done) {
        request("http://localhost:5000/", function(error, response, body){
            expect(body).toEqual('index');
            done();
        });
    }, 1000);
});

describe('My web-socket', function() {

    var socket;

    beforeEach(function(done) {
        socket = io.connect('http://localhost:5000/direct', { 'force new connection' : true });
        done();
    });

    it('should connect to web-socket', function (done) {
        socket.on('connect', function() {
            done();
        });
    }, 2000);

    it('should receive a ping', function (done) {
        socket.on('ping', function () {
            socket.emit('pong', { unique_id: 'Jack Test' });
            done();
        });
    }, 2000);

    afterEach(function (done) {
        if(socket.socket.connected) {
            socket.disconnect();
        }
        done();
    });
});