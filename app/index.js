'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var BackGenerator = yeoman.generators.Base.extend({
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
    this.log(chalk.magenta('You\'re using the fantastic Back generator.'));

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
    this.template('_server.js', 'server.js');
    this.template('_routes.js', 'routes/routes.js');
    this.template('_serverHandler.js', 'tools/serverHandler.js');

    this.template('_demoClientSIO.js', 'tools/demoClientSIO.js');

    this.template('_restapi.spec.js', 'spec/restapi.spec.js');

    this.template('_package.json', 'package.json');
    this.template('_gruntfile.js', 'gruntfile.js');
  }
});

module.exports = BackGenerator;