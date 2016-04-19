'use strict';
ideaPlanner.controller("magicCtrl", ['$scope', '$firebaseObject', 'Idea', '$location', function($scope, $firebaseObject, Idea, $location) {

  var ref = new Firebase("https://sizzling-torch-8958.firebaseio.com");
  var session = Idea.getSessionID();
  $location.url(session.key());

  $scope.toBeAddedToProgress = {
    bool: true
  };

  if ($scope.like || $scope.for || $scope.with === undefined) {
    $scope.like = "it's like...";
    $scope.for = "for...";
    $scope.with = "with...";
  }

  $scope.vennInput = {
    like: $scope.like,
    for: $scope.for,
    with: $scope.with
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

  $scope.writeDB = function() {
    session.child('page3').set({
      like: $scope.vennInput.like,
      for: $scope.vennInput.for,
      with: $scope.vennInput.with
    });
  };

  $scope.updateVennData();

}]);
