(function () {

    'use strict';

    var Database = require('../database');

    exports.ping = {
        handler: function (request, reply) {
            Database.io.emit('ping', 'PING!!');
        }
    };

    exports.pang = {
        handler: function (request, reply) {
            Database.io.emit('pang', 'PANG!!');
        }
    };
}());