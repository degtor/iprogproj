'use strict';

ideaPlanner.controller("marketCtrl", ['$scope', 'Idea', function($scope, Idea) {

  $scope.toBeAddedToProgress = {
    bool: true
  };

  // NYTT STUFF HÄR
  var session = Idea.getSessionID();
  console.log(session.key());

  // DETTA SKA LÄSA IN värdena på scope från db
  session.once('value', function(snapshot) {
    console.log(snapshot.val());
    var page5 = snapshot.val().page5;
    if (page5 !== undefined) {
      $scope.data[0] = page5.Tech;
      $scope.data[1] = page5.Work;
      $scope.data[2] = page5.Hardware;
      $scope.data[3] = page5.Software;
      $scope.data[4] = page5.PR;
      $scope.toBeAddedToProgress.bool = false;
      Idea.updateProgressValue(12.5);
      console.log($scope.toBeAddedToProgress.bool);
      console.log(Idea.getProgressValue());
    }
  });


  // SLUT HÄR

  $scope.labels = ["Tech", "Work", "Hardware", "Software", "Marketing", "Remaining %"];
  $scope.data = [0, 0, 0, 0, 0, 0];

  $scope.series = ['My Company']
  $scope.colours = ['#8731BE', '#9E60C9', '#B687D6', '#CFB0E4', '#E7D7F1', '#606C76'];
  $scope.total = null;
  $scope.under100 = true;

  $scope.countTotal = function() {
    var cost = 0;
    var i;

    for (i = 0; i < $scope.data.length - 1; i++) {
      cost += parseInt($scope.data[i]);
    }

    $scope.total = cost;

    if ($scope.total == 100) {
      $scope.under100 = true;
      $scope.data[5] = 0;
    } else if ($scope.total < 100) {
      $scope.under100 = true;
      $scope.data[5] = 100 - $scope.total;
    } else if ($scope.total > 100) {
      $scope.under100 = false;
      $scope.data[5] = 0;
    }

    return $scope.total
  }


  $scope.writeDB = function() {
    // Function run through factory to update progressbar. 10 is just a approx. weighted number of total progress.
    //Idea.updateProgressValue(10);

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

}]);
