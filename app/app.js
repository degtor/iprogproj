'use strict';

var ideaPlanner = angular.module('myApp', ['ngRoute', 'duScroll', 'firebase', 'chart.js', 'angular-venn']);


ideaPlanner.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/home', {
      templateUrl: 'partials/homeView/home.html'
    })
    .when('/fullpage', {
      templateUrl: 'partials/fullpageView/fullpage.html'
    })

  .otherwise({ redirectTo: '/home' });
}]);
