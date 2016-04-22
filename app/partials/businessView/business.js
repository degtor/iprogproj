'use strict';

ideaPlanner.controller("businessCtrl", ['$scope', 'Idea', function($scope, Idea) {

  var images = ['hipsters', 'emo', 'fanatics', 'family'];
  var money = ['subscriptions', 'one time fee', 'advertising', 'sponsors', 'charity']
  $scope.input = false;
  $scope.pickedPerson = null;
  $scope.pickedMoney = null;
  $scope.toBeAddedToProgress = true;
  $scope.filled = [false, false];

  $scope.returnAllImg = function() {
    return images;
  }

  $scope.returnAllMoney = function() {
    return money;
  }

  $scope.pickPerson = function(id) {
    $scope.pickedPerson = id;
    $scope.input = true;
    $scope.filled[0] = true;
    $scope.saveData();
  }

  $scope.getPickedPerson = function() {
    if ($scope.pickedPerson == null) {
      return 'mark'
    } else {
      return $scope.pickedPerson;
    }
  };

  $scope.pickMoney = function(id) {
    $scope.pickedMoney = id;
    $scope.input = true;
    $scope.filled[1] = true;
    $scope.saveData();
  };

  $scope.getPickedMoney = function() {
    if ($scope.pickedMoney == null) {
      return '?';
    } else {
      return $scope.pickedMoney;
    }
  };

  var session = Idea.getSessionID();

  $scope.saveData = function() {

    // Function run through factory to update progressbar. 10 is just a approx. weighted number of total progress.

    if ($scope.filled[0] === true && $scope.filled[1] === true) {
      if ($scope.toBeAddedToProgress === true) {
        Idea.updateProgressValue(12.5);
        $scope.toBeAddedToProgress = false;
      }

      session.child('page4').set({
        targetgroup: $scope.getPickedPerson(),
        method: $scope.getPickedMoney()
      });
    }
  };

}]);
