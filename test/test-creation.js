/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('back generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('back:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      '../../.gitignore',
      '../../.travis.yml',
      '../../package.json',
      '../../README.md',
      '../../app/templates/_admin.js',
      '../../app/templates/_config.js',
      '../../app/templates/_database.js',
      '../../app/templates/_example.js',
      '../../app/templates/_models.js',
      '../../app/templates/_package.json',
      '../../app/templates/_README.md',
      '../../app/templates/_routes.js',
      '../../app/templates/_server.js',
      '../../app/templates/_sio.js',
      '../../app/templates/_siotest.js',
      '../../app/templates/_users.js'
    ];

    helpers.mockPrompt(this.app, {
      'appName'        : true,
      'appDescription' : true,
      'appVersion'     : true
    });
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});