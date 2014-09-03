/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('front generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('front:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      '../../.travis.yml',
      '../../package.json',
      '../../README.md',
      '../../app/templates/_application.js',
      '../../app/templates/_bower.json',
      '../../app/templates/_content.html',
      '../../app/templates/_ContentController.js',
      '../../app/templates/_ContentController.spec.js',
      '../../app/templates/_gruntfile.js',
      '../../app/templates/_index.html',
      '../../app/templates/_e2e.spec.js',
      '../../app/templates/_package.json',
      '../../app/templates/image_a.jpg',
      '../../app/templates/image_b.jpg',
      '../../app/templates/image_c.jpg',
      '../../app/templates/karma.config.js',
      '../../app/templates/protractor.config.js',
      '../../app/templates/_README.md'
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