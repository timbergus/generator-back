'use strict';

describe('ContentController from app', function() {
    var scope;
    beforeEach(angular.mock.module('app'));
    beforeEach(angular.mock.inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('ContentController', {
            $scope: scope
        });
    }));

    // VARIABLES

    it('should have a variable called "content"', function() {
        expect(scope.content).toBeDefined();
    });

    it('should have a variable called "alerts"', function() {
        expect(scope.alerts).toBeDefined();
    });

    // FUNCTIONS

    it('should have a function called "closeAlert"', function() {
        expect(scope.closeAlert).toBeDefined();
        expect(typeof(scope.closeAlert)).toBe('function');
    });
});