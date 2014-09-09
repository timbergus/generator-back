// Put your real data for the remote server and then uncomment the
// remote connection line in "database.js" and comment the local connection line.

(function () {

    'use strict';
    
    module.exports = {  
        mongo: {
            username: '',
            password: '',
            url: '127.0.0.1:27017',
            database: 'genback_db'
        },
        redis: {
            url: '',
            auth: ''
        }
    };
})();