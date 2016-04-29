'use strict';

ideaPlanner.controller("analysisCtrl", ['$scope', 'Idea', function($scope, Idea) {

  // NYTT STUFF HÄR
  var session = Idea.getSessionID();
  // DETTA SKA LÄSA IN värdena på scope från db
  session.once('value', function(snapshot) {
    var page6 = snapshot.val().page6;
    if (page6 !== undefined) {
      $scope.data[0][0] = page6.Mycompany.Experience;
      $scope.data[0][1] = page6.Mycompany.Cost;
      $scope.data[0][2] = page6.Mycompany.Quality;
      $scope.data[0][3] = page6.Mycompany.Marketshare;
      $scope.data[0][4] = page6.Mycompany.MainIdea;
      $scope.data[1][0] = page6.othercompany.Experience;
      $scope.data[1][1] = page6.othercompany.Cost;
      $scope.data[1][2] = page6.othercompany.Quality;
      $scope.data[1][3] = page6.othercompany.Marketshare;
      $scope.data[1][4] = page6.othercompany.MainIdea;
      $scope.data[2][0] = page6.othercompany2.Experience;
      $scope.data[2][1] = page6.othercompany2.Cost;
      $scope.data[2][2] = page6.othercompany2.Quality;
      $scope.data[2][3] = page6.othercompany2.Marketshare;
      $scope.data[2][4] = page6.othercompany2.MainIdea;
      $scope.toBeAddedToProgress.bool = false;
      Idea.updateProgressValue(12.5);
    }
  });


  // SLUT HÄR

  $scope.toBeAddedToProgress = {
    bool: true
  };

  $scope.labels = ["Experience", "Cost", "Quality", "Target group", "Main idea"];

  $scope.data = [
    [10, 20, 30, 20, 50],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ];

  $scope.series = ['My company', 'First competitor', 'Second competitor'];

  $scope.colours = ['#8731BE'];

  $scope.writeDB = function() {
    // Function run through factory to update progressbar. 10 is just a approx. weighted number of total progress.
    //Idea.updateProgressValue(10);

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
