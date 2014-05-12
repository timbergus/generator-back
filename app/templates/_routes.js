exports.partials = function (request, response) {
    var partialName = request.params.name;
    response.render('partials/' + partialName);
};

exports.data = function (request, response) {
    var data = require('../public/data/' + request.body.source);
    response.send(data);
};

exports.index = function (request, response) {
    response.send('index');
};