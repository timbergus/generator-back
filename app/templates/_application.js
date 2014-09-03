/*globals angular */
/*jslint browser:true */

'use strict';

/**
 * @ngdoc object
 * @name app
 * 
 * @description
 * This is the main module for our application.
 * 
 * @requires $urlRouterProvider
 * @requires $stateProvider
 * @requires $translateProvider
 * @requires $locationProvider
 */
 
/**
 * @ngdoc method
 * @name app:getLocale
 * @methodOf app
 * 
 * @returns {string} The browser language in a two letters string.
 * 
 * @description
 * This function gets the browser language.
 */

var app = angular.module('app', ['pascalprecht.translate', 'ui.bootstrap', 'ui.router'], ['$urlRouterProvider', '$stateProvider', '$translateProvider', '$locationProvider', function ($urlRouterProvider, $stateProvider, $translateProvider, $locationProvider) {
    
    $stateProvider
        .state('home', {
            url: '/home',
            controller: 'ContentController',
            templateUrl: 'partials/content.html'
        });

    $urlRouterProvider.otherwise('home');

    var getLocale = function () {
        var nav = window.navigator;
        return (nav.language || nav.browserLanguage || nav.systemLanguage || nav.userLanguage || '').split('-')[0];
    };
    
    // $translateProvider is configured to read the corresponding JSON file for the language selected by the user and two options are set:
    // 
    // * fallbackLanguage: the language that is going to loaded if no other language is specified.
    // * preferredLanguage: the language that is going to be loaded.

    $translateProvider.useStaticFilesLoader({
        prefix: './translations/',
        suffix: '.json'
    })
        .fallbackLanguage(getLocale())
        .preferredLanguage(getLocale());

    $locationProvider.html5Mode(false);
}]);