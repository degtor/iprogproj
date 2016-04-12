'use strict';

// Declare app level module which depends on views, and components
var ideaPlanner = angular.module('myApp', ['ngRoute', 'duScroll', 'chart.js']);

ideaPlanner.config(['$routeProvider', function($routeProvider) {

  $routeProvider.
    when('/home', {
      templateUrl: 'partials/homeView/home.html'
    }).
    when('/fullpage', {
      templateUrl: 'partials/fullpageView/fullpage.html',
      //controller: 'FullpageCtrl'
    }).
    when('/problem', {
      templateUrl: 'partials/fullpageView/fullpage.html#problem',
      controller: 'ProblemCtrl'
    }).
    when('/title', {
      templateUrl: 'partials/fullpageView/fullpage.html#title',
      controller: 'TitleCtrl'
    }).
    when('/market', {
      templateUrl: 'partials/fullpageView/fullpage.html#market',
      controller: 'marketCtrl'
    }).
    when('/preparation', {
      templateUrl: 'partials/preparation.html',
      controller: 'PreparationCtrl'
    }).



  otherwise({redirectTo: '/home'});
}]);
