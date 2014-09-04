var Admin    = require('./routes/admin'),
    Users    = require('./routes/users'),
    Examples = require('./routes/example');

exports.endpoints = [

    { method: 'GET',    path: '/login',       config: Admin.login          },
    { method: 'POST',   path: '/signup',      config: Admin.signup         },
    { method: 'DELETE', path: '/session',     config: Admin.delete_session },

    { method: 'GET',    path: '/users/{id?}', config: Users.get_users      },
    { method: 'POST',   path: '/users',       config: Users.post_users     },
    { method: 'PUT',    path: '/users/{id}',  config: Users.put_users      },
    { method: 'DELETE', path: '/users/{id}',  config: Users.delete_users   },

    { method: 'GET',    path: '/reset',       config: Examples.reset       }
];