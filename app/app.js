'use strict';

// Declare app level module which depends on views, and components
<<<<<<< HEAD
var ideaPlanner = angular.module('myApp', ['ngRoute', 'duScroll', 'angular-venn']);

ideaPlanner.config(['$routeProvider', function($routeProvider) {

  $routeProvider.
  when('/home', {
    templateUrl: 'partials/homeView/home.html'
  }).
  when('/fullpage', {
      templateUrl: 'partials/fullpageView/fullpage.html',
      //controller: 'FullpageCtrl'
    }).
    /*when('/problem', {
      templateUrl: 'partials/fullpageView/fullpage.html#problem',
    }).
    when('/dinneroverview', {
      templateUrl: 'partials/dinneroverview.html',
      controller: 'OverviewCtrl'
    }).
    when('/preparation', {
      templateUrl: 'partials/preparation.html',
      controller: 'PreparationCtrl'
    }).*/
=======
var ideaPlanner = angular.module('myApp', ['ngRoute', 'duScroll', 'firebase', 'chart.js']);

>>>>>>> d7764730a3934385fa6d79314f5b571538bb271f

ideaPlanner.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/home', {
    templateUrl: 'partials/homeView/home.html'
  })
      .when('/fullpage', {
        templateUrl: 'partials/fullpageView/fullpage.html'
  })

<<<<<<< HEAD
  otherwise({ redirectTo: '/home' });
}]);
=======
      .otherwise({redirectTo: '/home'});
}]);
>>>>>>> d7764730a3934385fa6d79314f5b571538bb271f
