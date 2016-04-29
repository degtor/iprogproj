'use strict';

ideaPlanner.controller("businessCtrl", ['$scope', 'Idea', function($scope, Idea) {

  // NYTT STUFF HÄR
  var session = Idea.getSessionID();
  console.log(session.key());

  // DETTA SKA LÄSA IN värdena på scope från db
  session.once('value', function(snapshot) {
    console.log(snapshot.val());
    var page4 = snapshot.val().page4;
    if (page4 !== undefined) {
      $scope.pickedPerson = page4.targetgroup;
      $scope.pickedMoney = page4.method;
      $scope.input = page4.input;
      Idea.updateProgressValue(12.5);
      $scope.toBeAddedToProgress.bool = false;

    }
  });


  // SLUT HÄR

  var images = ['women', 'men', 'hipsters', 'organisation', 'emo', 'fanatics', 'family', 'clubbers'];
  var money = ['subscriptions', 'one time fee', 'advertising', 'sponsors', 'charity'];
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

  $scope.saveData = function() {

    // Function run through factory to update progressbar. 10 is just a approx. weighted number of total progress.

    if ($scope.filled[0] === true && $scope.filled[1] === true) {
      if ($scope.toBeAddedToProgress === true) {
        Idea.updateProgressValue(12.5);
        $scope.toBeAddedToProgress = false;
      }

      session.child('page4').set({
        targetgroup: $scope.getPickedPerson(),
        method: $scope.getPickedMoney(),
        input: $scope.input
      });
    }
  };

}]);
