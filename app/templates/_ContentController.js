/*globals app */

'use strict';

/**
 * @ngdoc controller
 * @name app.controller:ContentController
 * 
 * @description
 * This is the controller for __content.html__.
 * 
 * @requires $log
 * @requires $scope
 */

/**
 * @ngdoc property
 * @name app.controller:ContentController#content
 * @propertyOf app.controller:ContentController
 * 
 * @description
 * Content data for the app.
 *
 * | Property      | Type           | Details                        |
 * |---------------|----------------|--------------------------------|
 * | `title`       | {@type string} | title of the application       |
 * | `description` | {@type string} | description of the application |
 * | `version`     | {@type string} | version of the application     |
 */
 
/**
 * @ngdoc property
 * @name app.controller:ContentController#alerts
 * @propertyOf app.controller:ContentController
 * 
 * @description
 * Alerts for the app with this structure:
 * 
 * | Property | Type           | Details              |
 * |----------|----------------|----------------------|
 * | `type`   | {@type string} | alert type           |
 * | `msg`    | {@type string} | message of the alert |
 */

/**
 * @ngdoc method
 * @name app.controller:ContentController#closeAlert
 * @methodOf app.controller:ContentController
 * 
 * @param {number} index index to select which aler you need
 * 
 * @returns {none} This method modify the $scope
 * 
 * @description
 * This method close an alert using its index.
 */
 
app.controller('ContentController', ['$scope', '$log', function ($scope, $log) {

    $log.log('The controller has been loaded!');
    $log.info('The controller has been loaded!');
    $log.warn('The controller has been loaded!');
    $log.error('The controller has been loaded!');
    $log.debug('The controller has been loaded!');
    
    $scope.content = {
        title       : '<%= appName %>',
        description : '<%= appDescription %>',
        version     : '<%= appVersion %>'
    };

    $scope.alerts = [{
        type: 'success',
        msg: 'Welcome to your first and amazing web application!'
    }];

    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };
}]);