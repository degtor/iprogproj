'use strict';

var ideaPlanner = angular.module('myApp', ['ngRoute', 'duScroll', 'firebase', 'chart.js', 'angular-venn', 'ui.bootstrap.progressbar', 'ui.bootstrap.tpls']);


ideaPlanner.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/home', {
      templateUrl: 'partials/homeView/home.html'
    })
    .when('/fullpage', {
      templateUrl: 'partials/fullpageView/fullpage.html'
    })

  .otherwise({ redirectTo: '/home' });
}]);
