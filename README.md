# Generator-Back [![Build Status](https://secure.travis-ci.org/timbergus/generator-back.png?branch=master)](https://travis-ci.org/timbergus/generator-back) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

> Back end generator for [Yeoman](http://yeoman.io) with [Angular](https://angularjs.org/) and other cool stuff :)

## Getting Started

To start using this generator you need to clone or download it, and link it to the node modules of your system. To do this, you need to execute this command into the __generator-back__ project folder:

```
npm link
```

## Before Creating our Application

Well, mainly an amazing generator for Yeoman to create a Web Application with Angular and Bootstrap full of nice tools and very clear to work with. This is just the application (back end); there is no back end here. The idea is to have only the application and be able to use whatever server we want using Angular to create the communications API against our server, or even make it configurable to work with different servers or work stand alone.

To create our application, we need to create a new folder to hold it and then, inside this new folder execute the following command and answer a few configuration questions:

```
yo back
```

## After Creating our Application

When finishing installing, what we are going to have in our application folder is a full functional development environment that is going to help you to create your application from scratch. The main grunt tasks to develop are launched when the server starts with `grunt server`, and they are useful to test your changes in the code dynamically. To launch this local server, we just need to execute the following command: `grunt server`.

1. Test checking: when the server is launched the code is going to be checked using three tools for HTML, CSS and JavaScript respectively:
	* [HTMLHint](http://htmlhint.com/)
	* [CSSLint](http://csslint.net/)
	* [JSLint](http://www.jslint.com/)

2. [Live reload](https://github.com/gruntjs/grunt-contrib-livereload):  when the server is launched, every time the code changes, the browser is refreshed to be able to check the result of our work.

The rest of the tasks are launched after code, when you are happy with the look of your site.

1. `grunt test`: this command launches the test for the site. We are going to do two kind of tests: unit tests and end to end test. The unit tests check the integrity of our code and the well working of our methods. In the other hand, the end to end test checks the well working of our application once running. It is like a virtual user that interacts with your applications as you program it and tells yous if everything works for the user.

2. `grunt documentation`: this command creates the documentation for the project. There will be two sets of documents:
	* Technical Documentation: made with [YUIDoc](http://yui.github.io/yuidoc/) that represent the schematic of the code structure of the application.
	* Descriptive Documentation: made with [Docco](http://jashkenas.github.io/docco/) that represent a description about the work-flow of the code of the application.

3. `grunt`: this command builds the final release of the application and stores it inside a __dist__ folder inside our project. This final release is all what you need to put in your server to have your application working on Internet.

## The Grunt Tools Used

Well, the tools we are going to use here the following:

1. Local server and live refresh of the project files.
    * [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
    * [matchdep](https://www.npmjs.org/package/matchdep)
    * [connect-livereload](https://github.com/intesso/connect-livereload)
    * [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)
    * [grunt-open](https://github.com/jsoverson/grunt-open)
    * [moment](https://github.com/moment/moment)
    * [grunt-usemin](https://github.com/yeoman/grunt-usemin)
    * [time-grunt](https://www.npmjs.org/package/time-grunt)
2. Documentation of the project with [YUIDoc](http://yui.github.io/yuidoc/) and [Docco](http://jashkenas.github.io/docco/).
    * [runt-contrib-yuidoc](https://github.com/gruntjs/grunt-contrib-yuidoc)
    * [grunt-docco](https://github.com/DavidSouther/grunt-docco).
3. Tests with [Karma](http://karma-runner.github.io/) and [Protractor](https://github.com/angular/protractor).
    * [grunt-karma](https://github.com/karma-runner/grunt-karma)
    * [grunt-protractor-webdriver](https://www.npmjs.org/package/grunt-protractor-webdriver)
    * [grunt-protractor-runner](https://www.npmjs.org/package/grunt-protractor-runner)
4. Copy of files.
    * [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy)
5. Clean of files.
    * [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)
6. Concatenation of files.
    * [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat)
7. CSS Compilation.
    * [grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less)
    * [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass)
    * [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)
    * [grunt-cssc](https://github.com/mediapart/grunt-cssc)
    * [grunt-contrib-csslint](https://github.com/gruntjs/grunt-contrib-csslint)
8. JavaScript code checking with [JSLint](http://www.jslint.com/) and compression.
    * [grunt-jslint](https://github.com/stephenmathieson/grunt-jslint)
    * [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
9. HTML minification.
    * [grunt-htmlhint](https://github.com/yaniswang/grunt-htmlhint)
    * [grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin)

## License

MIT

Hope you like it :)