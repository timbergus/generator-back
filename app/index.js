'use strict';

var util = require('util'),
    path = require('path'),
    yeoman = require('yeoman-generator'),
    chalk = require('chalk'),
    BackGenerator = yeoman.generators.Base.extend({
        init: function () {
            this.pkg = require('../package.json');

            this.on('end', function () {
                if (!this.options['skip-install']) {
                    this.npmInstall();
                }
            });
        },

        askFor: function () {
            var done = this.async();

            // have Yeoman greet the user
            this.log(this.yeoman);

            // replace it with a short and sweet description of your generator
            this.log(chalk.magenta('You\'re using the fantastic Back generator.'));

            var prompts = [{
                type: 'input',
                name: 'appName',
                message: 'How do you want to call your REST API?',
                default: 'My Cool REST API'
            },
            {
                type: 'input',
                name: 'appDescription',
                message: 'What does your REST API do?',
                default: 'It serves the world!'
            },
            {
                type: 'input',
                name: 'appVersion',
                message: 'Which is you REST API version?',
                default: '0.0.1'
            }];

            this.prompt(prompts, function (props) {
                this.appName = props.appName;
                this.appDescription = props.appDescription;
                this.appVersion = props.appVersion;
                done();
            }.bind(this));
        },

        app: function () {

            // First we are going to create the necessary folders
            // 
            // * routes
            // * models

            this.mkdir('routes');
            this.mkdir('models');

            // Now we are going to move every file into its folder
            // 
            // * Into the root folder

            this.template('_README.md'    , 'README.md');
            this.template('_server.js'    , 'server.js');
            this.template('_siotest.js'   , 'siotest.js');
            this.template('_routes.js'    , 'routes.js');
            this.template('_package.json' , 'package.json');
            this.template('_gruntfile.js' , 'gruntfile.js');
            this.template('_database.js'  , 'database.js');
            this.template('_config.js'    , 'config.js');

            // * Into the routes folder

            this.template('_admin.js'     , 'routes/admin.js');
            this.template('_users.js'     , 'routes/users.js');
            this.template('_sio.js'       , 'routes/sio.js');
            this.template('_example.js'   , 'routes/example.js');

            // * Into de models folder

            this.template('_models.js'    , 'models/models.js');

            // For the moment we are not going to make tests
        }
    });

module.exports = BackGenerator;