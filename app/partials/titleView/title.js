'use strict';

// angular.module('myApp.business', ['ngRoute'])

//     .config(['$routeProvider', function($routeProvider) {
//         $routeProvider.when('/business', {
//             templateUrl: '/partials/businessView/business.html',
//             controller: 'BusinessCtrl'
//         });
//     }])

//     .controller('BusinessCtrl', [function() {

//     }]);

ideaPlanner.controller("titleCtrl", function($scope) {
	
	$scope.saveData = function() {
		console.log('ok');
	}

	$scope.titleSuggestions = ['Cool', 'Squirrel', 'Digital', 'UX']
});
