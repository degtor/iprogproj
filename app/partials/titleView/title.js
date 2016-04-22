'use strict';

ideaPlanner.controller("titleCtrl", ['$scope', 'Idea', function($scope, Idea) {

  var session = Idea.getSessionID();
  $scope.titleSuggestions = [];

  $scope.mail = '';

  $scope.sendMail = function() {
    $window.open("mailto:" + $scope.mail + "?subject=" + "My Pitch" + "&body=" + $location.absUrl(), "_self");
  };

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

    session.child('page8').set({
      title: title
    });
  }


}]);
