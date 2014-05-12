// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';
 
module.exports = function (grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      js: {
        files: ['routes/**'],
        tasks: ['jslint']
      },

      //express: {
      //  files:  [ '**/*.js' ],
      //  tasks:  [ 'express:dev' ],
      //  options: {
      //    spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
      //  }
      //}
    },

    karma: {
      unit: {
        configFile: 'karma.config.js'
      }
    },





    express: {
      dev: {
        options: {
          script: 'server.js'
        }
      }
    },




    
    protractor: {
      options: {
        configFile: 'node_modules/protractor/referenceConf.js',
        keepAlive: true,
        noColor: false
      },
      your_target: {
        options: {
          configFile: 'protractor.config.js'
        }
      }
    },

    yuidoc: {
      compile: {
        'name': '<%= appName %>',
        'description': '<%= appDescription %>',
        'version': '<%= appVersion %>',
        'url': 'http://localhost:9000/app',
        options: {
          paths: [ 'app/js/', 'app/js/controllers/' ],
          outdir: 'docs/technical'
        }
      }
    },

    docco: {
      debug: {
        src: ['app/js/*.js', 'app/js/controllers/*.js'],
        options: {
          output: 'docs/descriptive'
        }
      }
    },

    jslint: {
      server: {
        src: [
          'app/js/*.js'
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

    copy: {
      task_a1: {
        expand: true,
        cwd: 'app/images/',
        src  : ['**'],
        dest : 'dist/images/'
      }
    },

    clean: {
      build: {
        src: ['.sass-cache', '.tmp']
      }
    },

    protractor_webdriver: {
      your_target: {
        options: {
          command: 'webdriver-manager start'
        },
      },
    }
  });
 
  //grunt.registerTask('server'           , ['build_css', 'connect:livereload', 'open', 'watch']);
  grunt.registerTask('test'             , ['htmlhint', 'karma', 'protractor_webdriver', 'protractor']);
  grunt.registerTask('documentation'    , ['yuidoc', 'docco']);
  
  grunt.registerTask('default'          , ['copy:task_a',
                                           'useminPrepare',
                                           'concat',
                                           'uglify',
                                           'cssc',
                                           'cssmin',
                                           'usemin',
                                           'clean',
                                           'build_html',
                                           'copy:task_a1',
                                           'copy:task_a2',
                                           'copy:task_b',
                                           'copy:task_c']);

  grunt.registerTask('build_html'       , ['htmlhint', 'htmlmin']);
  grunt.registerTask('build_javascript' , ['concat:javascript', 'uglify']);
  grunt.registerTask('build_css'        , ['sass', 'less', 'copy:task_e', 'copy:task_f', 'csslint']);



  grunt.registerTask('server', [ 'express:dev', 'watch' ]);
};