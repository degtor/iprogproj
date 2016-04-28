'use strict';

ideaPlanner.controller("analysisCtrl", ['$scope', 'Idea', function($scope, Idea) {

  $scope.toBeAddedToProgress = {
    bool: true
  };

  var ref = new Firebase("https://sizzling-torch-8958.firebaseio.com");

  $scope.labels = ["Experience", "Cost", "Quality", "Target group", "Main idea"];

  $scope.data = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ];

  $scope.series = ['My company', 'First competitor', 'Second competitor'];

  $scope.colours = ['#8731BE'];

  $scope.writeDB = function() {
    // Function run through factory to update progressbar. 10 is just a approx. weighted number of total progress.
    //Idea.updateProgressValue(10);

    var session = Idea.getSessionID();

    session.child('page6').set({
      Mycompany: {
        Experience: $scope.data[0][0],
        Cost: $scope.data[0][1],
        Quality: $scope.data[0][2],
        Marketshare: $scope.data[0][3],
        MainIdea: $scope.data[0][4]
      },
      othercompany: {
        Experience: $scope.data[1][0],
        Cost: $scope.data[1][1],
        Quality: $scope.data[1][2],
        Marketshare: $scope.data[1][3],
        MainIdea: $scope.data[1][4]
      },
      othercompany2: {
        Experience: $scope.data[2][0],
        Cost: $scope.data[2][1],
        Quality: $scope.data[2][2],
        Marketshare: $scope.data[2][3],
        MainIdea: $scope.data[2][4]
      }
    });

  };

}]);
