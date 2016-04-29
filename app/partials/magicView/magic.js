'use strict';
ideaPlanner.controller("magicCtrl", ['$scope', 'Idea', '$location', function($scope, Idea, $location) {


  $scope.toBeAddedToProgress = {
    bool: true
  };

  // NYTT STUFF HÄR
  var session = Idea.getSessionID();

  // DETTA SKA LÄSA IN värdena på scope från db
  session.once('value', function(snapshot) {
    var page3 = snapshot.val().page3;
    if (page3 !== undefined) {
      $scope.vennInput.like = page3.like;
      $scope.vennInput.for = page3.for;
      $scope.vennInput.with = page3.with;
      $scope.updateVennData();
      $scope.toBeAddedToProgress.bool = false;
      Idea.updateProgressValue(12.5);
      console.log($scope.toBeAddedToProgress.bool);
      console.log(Idea.getProgressValue());
    }
  });

  // SLUT HÄR

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
    $scope.$apply();
    session.child('page3').set({
      like: $scope.vennInput.like,
      for: $scope.vennInput.for,
      with: $scope.vennInput.with
    });
  };

  $scope.updateVennData();

}]);
