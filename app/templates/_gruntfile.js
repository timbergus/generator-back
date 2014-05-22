// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';
 
module.exports = function (grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      js: {
        files: ['server.js', 'routes/**', 'tools/**'],
        tasks: ['jslint']
      },
    },

    docco: {
      debug: {
        src: ['server.js', 'routes/*.js', 'tools/*.js'],
        options: {
          output: 'docs/descriptive'
        }
      }
    },

    jslint: {
      server: {
        src: [
          'server.js',
          'routes/*.js',
          'tools/*.js'
        ],
        directives: {
          node: true,
          todo: true,
          server: true,
          plusplus: true
        },
        options: {
          edition: 'latest',
          errorsOnly: true,
          failOnError: false
        }
      }
    },

    jasmine_node: {
      options: {
        forceExit: true,
        match: '.',
        matchall: false,
        extensions: 'js',
        specNameMatcher: 'spec'
      },
      all: ['spec/']
    }
  });

  grunt.registerTask('default'       , ['test', 'documentation']);
  grunt.registerTask('test'          , ['jasmine_node']);
  grunt.registerTask('documentation' , ['docco']);
};