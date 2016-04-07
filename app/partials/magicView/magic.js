'use strict';

/*
angular.module('ideaPlanner.magic', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/magic', {
    templateUrl: '/partials/magicView/magic.html',
    controller: 'magicCtrl'
  });
}]); */

ideaPlanner.controller("magicCtrl", ["$scope", function($scope) {

  $scope.vennInput = {
    like: "It's like...",
    for: "For...",
    with: "With..."
  };

  $scope.updateVennData = function() {
    $scope.vennData = [
      { sets: [$scope.vennInput.like], size: 12 },
      { sets: [$scope.vennInput.for], size: 12 },
      { sets: [$scope.vennInput.with], size: 12 },
      { sets: [$scope.vennInput.like, $scope.vennInput.for], size: 2 },
      { sets: [$scope.vennInput.like, $scope.vennInput.with], size: 2 },
      { sets: [$scope.vennInput.for, $scope.vennInput.with], size: 2 },
      { sets: [$scope.vennInput.like, $scope.vennInput.for, $scope.vennInput.with], size: 1 },
    ];
    return $scope.vennData;
  };

  $scope.updateVennData();

}]);
