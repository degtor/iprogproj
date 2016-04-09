'use strict';

// angular.module('myApp.business', ['ngRoute'])

//     .config(['$routeProvider', function($routeProvider) {
//         $routeProvider.when('/business', {
//             templateUrl: '/partials/problemView/problem.html',
//             controller: 'ProblemCtrl'
//         });
//     }])

//     .controller('ProblemCtrl', [function() {

//     }]);


ideaPlanner.controller("problemCtrl", function($scope) {
	
	$scope.saveData = function() {
		console.log('ok');
	}
});

ideaPlanner.directive("addbuttons", function($compile){
	return function(scope, element, attrs){
		element.bind("click", function(){
			angular.element(document.getElementById('space-for-input')).append($compile('<div class="row"><div class="col-xs-4"><input type="text" placeholder="Problem"></input></div><span class="glyphicon glyphicon-arrow-right"></span><div class="col-xs-4"><input type="text"  placeholder="Opportunity"></input></div></div>')(scope));
		});
	};
});