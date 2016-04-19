'use strict';

ideaPlanner.controller("titleCtrl", ['$scope', 'Idea', function($scope, Idea) {

  var session = Idea.getSessionID();
  $scope.titleSuggestions = [];



  $scope.getWords = function() {

    session.child('page1').once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        $scope.titleSuggestions.push(childSnapshot.val());
      })
    });
  };

  $scope.saveData = function() {
    var title = $scope.title;
    Idea.updateProgressValue(10);

    session.child('page7').set({
      title: title
    });
  }


}]);
