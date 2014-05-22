/*jslint node: true */
/*jslint unparam: true */
'use strict';

(function () {
    module.exports = function () {
        return {
            partials: function (request, response) {
                var partialName = request.params.name;
                response.render('partials/' + partialName);
            },
            data: function (request, response) {
                var data = require('../public/data/' + request.body.source);
                response.send(data);
            },
            index: function (request, response) {
                response.send('index');
            }
        };
    };
}());