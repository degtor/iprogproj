'use strict';

angular.module('myApp.fullpageView', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/fullpageView', {
            templateUrl: 'fullpageView/fullpage.html',
            controller: 'FullpageCtrl'
        });
    }])

    .controller('FullpageCtrl', [function() {

    }]);