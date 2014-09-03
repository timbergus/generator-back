'use strict';

var util = require('util'),
    path = require('path'),
    yeoman = require('yeoman-generator'),
    chalk = require('chalk'),
    FrontGenerator = yeoman.generators.Base.extend({
        init: function () {
            this.pkg = require('../package.json');

            this.on('end', function () {
                if (!this.options['skip-install']) {
                    this.installDependencies();
                }
            });
        },

        askFor: function () {
            var done = this.async();

            // have Yeoman greet the user
            this.log(this.yeoman);

            // replace it with a short and sweet description of your generator
            this.log(chalk.magenta('You\'re using the fantastic Front generator.'));

            var prompts = [{
                type: 'input',
                name: 'appName',
                message: 'How do you want to call your application?',
                default: 'My Cool App'
            },
            {
                type: 'input',
                name: 'appDescription',
                message: 'What does your application do?',
                default: 'Cool things!'
            },
            {
                type: 'input',
                name: 'appVersion',
                message: 'Which is you application version?',
                default: '0.1.0'
            }];

            this.prompt(prompts, function (props) {
                this.appName = props.appName;
                this.appDescription = props.appDescription;
                this.appVersion = props.appVersion;
                done();
            }.bind(this));
        },

        app: function () {

            this.mkdir('app/templates');
            this.mkdir('app/js/filters');
            this.mkdir('app/js/services');
            this.mkdir('app/js/directives');

            this.template('_README.md', 'README.md');

            this.template('_index.html', 'app/index.html');
            this.template('_content.html', 'app/partials/content.html');

            this.copy('es.json', 'app/translations/es.json');
            this.copy('en.json', 'app/translations/en.json');

            this.copy('image_a.jpg', 'app/images/image_a.jpg');
            this.copy('image_b.jpg', 'app/images/image_b.jpg');
            this.copy('image_c.jpg', 'app/images/image_c.jpg');

            this.copy('custom.scss', 'app/scss/custom.scss');
            this.copy('_colors.scss', 'app/scss/_colors.scss');

            this.template('_application.js', 'app/js/application.js');
            this.template('_ContentController.js', 'app/js/controllers/ContentController.js');

            this.template('_e2e.spec.js', 'spec/e2e.spec.js');
            this.template('_ContentController.spec.js', 'spec/ContentController.spec.js');

            this.copy('karma.config.js', 'karma.config.js');
            this.copy('protractor.config.js', 'protractor.config.js');

            this.template('_bower.json', 'bower.json');
            this.template('_gruntfile.js', 'gruntfile.js');
            this.template('_package.json', 'package.json');
        }
    });

module.exports = FrontGenerator;