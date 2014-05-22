/*jslint node: true */
'use strict';

(function () {
    module.exports = function (ioclient) {
        return {
            testSocket: function () {
                var socket = ioclient.connect('http://localhost:5000/direct', { 'force new connection': true });

                socket.on('ping', function () {
                    socket.emit('pong', { unique_id: 'Jack' });
                    console.log('Ping received in client Jack!');
                });

                socket.on('serverResponse', function (data) {
                    console.log(data);
                });
            }
        };
    };
}());