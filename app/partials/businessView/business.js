'use strict';

// angular.module('myApp.business', ['ngRoute'])

//     .config(['$routeProvider', function($routeProvider) {
//         $routeProvider.when('/business', {
//             templateUrl: '/partials/businessView/business.html',
//             controller: 'BusinessCtrl'
//         });
//     }])

//     .controller('BusinessCtrl', [function() {
//     	images = ['hipsters', 'emo'];

//     	$scope.allImg = function() {
//     		console.log(images)
//     		return images
//     	}

//     }]);


ideaPlanner.controller("businessCtrl", ['$scope', 'Idea', function($scope, Idea) {

	var images = ['hipsters', 'emo', 'fanatics', 'family'];
	var money = ['subscriptions', 'one time fee', 'advertising', 'sponsors', 'charity']
	$scope.input = false;
	$scope.pickedPerson = null;
	$scope.pickedMoney = null;;

$scope.returnAllImg = function() {
	return images;
}

$scope.returnAllMoney = function() {
	return money;
}

$scope.pickPerson = function(id) {
	$scope.pickedPerson = id;
	$scope.input = true;
}

$scope.getPickedPerson = function() {
	if ($scope.pickedPerson == null) {
		return 'mark'
	} else {
		return $scope.pickedPerson;
	}
}

$scope.pickMoney = function(id) {
	$scope.pickedMoney = id;
	$scope.input = true;
}

$scope.getPickedMoney = function() {
	if ($scope.pickedMoney == null) {
		return '?';
	} else {
		return $scope.pickedMoney;
	}
}

}]);