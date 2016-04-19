'use strict';

ideaPlanner.controller("marketCtrl", ['$scope', 'Idea', function($scope, Idea) {

  var ref = new Firebase("https://sizzling-torch-8958.firebaseio.com");

  $scope.labels = ["Tech", "Work", "Hardware", "Software", "PR"];

  $scope.data = [
    [0, 0, 0, 0, 0]
  ];

  $scope.series = ['My Company']

  $scope.colours = ['#8731BE'];

  $scope.total = null;

  $scope.countTotal = function() {
    var cost = 0;
    var i;
    for (i = 0; i < $scope.data[0].length; i++) {
      if (($scope.data[0][i]) !== '') {
        cost += parseInt($scope.data[0][i]);
      }
    }
    $scope.total = cost;
    return $scope.total
  }


  $scope.saveData = function() {
    // Function run through factory to update progressbar. 10 is just a approx. weighted number of total progress.
    Idea.updateProgressValue(10);

    var session = Idea.getSessionID();

    session.child('page5').set({
      Tech: $scope.data[0][0],
      Work: $scope.data[0][1],
      Hardware: $scope.data[0][2],
      Software: $scope.data[0][3],
      PR: $scope.data[0][4]
    });

  };

  $scope.resetData = function() {
    ref.once("value", function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var key = childSnapshot.key();
        ref.child(key).child('page5').remove();
      });
    });
  };

}]);
