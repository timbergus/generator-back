# <%= appName %> (<%= appVersion %>)

<%= appDescription %>

## Updating packages.

The application needed packages are installed when created the application with `yo fron`. To update them you can jus navigate to the application folder, remove the old __node_modules__ and __bower_components__ and reinstall them with the following commands:

```
npm install
bower install
```

The we are going to use Grunt to generate the application, the documentation and to test it. The following commands are availeable in Grunt for this application:

1. `grunt server` to launch the application in a local server and watch it when editing.
2. `grunt test` to make the unit tests and the end to end tests. The unit test are made with Karma using Jasmine, and the end to end tests are made with Protractor.
3. `grunt documentation` to generate the documentation of the application. There are two document packages. One descriptive with the description of the critic process inside the application, and one technical with all the classes, methods and properties of the application.
4. `grunt` to build the final release of he current application. It can be deleted and rebuilt each time because there are no source files inside the distribution folder.

A normal workflow could be:

1. Generate the application and launch it in the server to start editing it and show the live editing while working: `yo front && grunt server`.
2. After doing our modifications, test the code, create the documentation and create the final release: `grunt test && grunt documentation && grunt`.
3. When finished the final release, test that it works with a local PHP server: `cd dist && php -S localhost:5000` (to run this server it is neccesary yo install php5-cli).