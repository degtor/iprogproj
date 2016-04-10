'use strict';

// Declare app level module which depends on views, and components
var ideaPlanner = angular.module('myApp', ['ngRoute', 'duScroll', 'firebase', 'chart.js']);


ideaPlanner.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/home', {
    templateUrl: 'partials/homeView/home.html'
  })
      .when('/fullpage', {
        templateUrl: 'partials/fullpageView/fullpage.html'
  })

      .otherwise({redirectTo: '/home'});
}]);