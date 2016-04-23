'use strict';

ideaPlanner.controller("marketCtrl", ['$scope', 'Idea', function($scope, Idea) {

  var ref = new Firebase("https://sizzling-torch-8958.firebaseio.com");

  $scope.labels = ["Tech", "Work", "Hardware", "Software", "Marketing", "Remaining precent"];

  $scope.data = [0, 0, 0, 0, 0, 0];

  $scope.toBeAddedToProgress = {
    bool: true
  };

  $scope.series = ['My Company']

  $scope.colours = ['#8731BE', '#9E60C9', '#B687D6', '#CFB0E4', '#E7D7F1', '#606C76'];

  $scope.total = null;

  $scope.under100 = true;

  $scope.countTotal = function() {
    var cost = 0;
    var i;

    for (i = 0; i < $scope.data.length; i++) {
      cost += parseInt($scope.data[i]);
    }

    $scope.total = cost;

    if ($scope.total <= 100){
      $scope.under100 = true;
      $scope.data[5] = 100 - $scope.total;
    } else if ($scope.total > 100){
      $scope.under100 = false;
      $scope.data[5] = 0;
    }

    return $scope.total
  }


  $scope.writeDB = function() {
    // Function run through factory to update progressbar. 10 is just a approx. weighted number of total progress.
    //Idea.updateProgressValue(10);

    var session = Idea.getSessionID();

    session.child('page5').set({
      Tech: $scope.data[0],
      Work: $scope.data[1],
      Hardware: $scope.data[2],
      Software: $scope.data[3],
      PR: $scope.data[4]
    });

  };

  $scope.updateNumData = function(id, num) {
    if (parseInt(num)) {
      $scope[id] = num;
    }
  }

  $scope.resetData = function() {
    ref.once("value", function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var key = childSnapshot.key();
        ref.child(key).child('page5').remove();
      });
    });
  };

}]);