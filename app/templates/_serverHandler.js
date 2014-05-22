/*jslint node: true */
'use strict';

(function () {
    module.exports = function (http) {
        return {
            testCall: function () {
                var options = {
                        host: 'localhost',
                        port: 8000,
                        path: '/',
                        method: 'GET'
                    },

                    req = http.request(options, function (res) {
                        console.log('STATUS: ' + res.statusCode);
                        console.log('HEADERS: ' + JSON.stringify(res.headers));
                        res.setEncoding('utf8');
                        res.on('data', function (chunk) {
                            console.log('BODY: ' + chunk);
                        });
                    });

                req.on('error', function (e) {
                    console.log('problem with request: ' + e.message);
                });

                req.end();
            }
        };
    };
}());