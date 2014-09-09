(function () {
    
    'use strict';

    var Admin     = require('./routes/admin'),
        Users     = require('./routes/users'),
        SIO       = require('./routes/sio'),
        Examples  = require('./routes/example');

    exports.endpoints = [

        { method: 'GET',    path: '/ping',              config: SIO.ping             },
        { method: 'GET',    path: '/pang',              config: SIO.pang             },

        { method: 'GET',    path: '/login',             config: Admin.login          },
        { method: 'POST',   path: '/signup',            config: Admin.signup         },
        { method: 'DELETE', path: '/session',           config: Admin.delete_session },

        { method: 'GET',    path: '/users/{username?}', config: Users.get_users      },
        { method: 'POST',   path: '/users',             config: Users.post_users     },
        { method: 'PUT',    path: '/users/{username}',  config: Users.put_users      },
        { method: 'DELETE', path: '/users/{username}',  config: Users.delete_users   },

        { method: 'GET',    path: '/reset',             config: Examples.reset       }
    ];
})();