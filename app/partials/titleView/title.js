'use strict';

ideaPlanner.controller("titleCtrl", ['$scope', 'Idea', '$window', '$location', function($scope, Idea, $window, $location) {

  $scope.toBeAddedToProgress = {
    bool: true
  };

  $scope.title = "";

  var session = Idea.getSessionID();

  // DETTA SKA LÄSA IN värdena på scope från db
  session.once('value', function(snapshot) {
    var page8 = snapshot.val().page8;
    if (page8 !== undefined) {
      $scope.title = page8.title;
      $scope.toBeAddedToProgress.bool = false;
      Idea.updateProgressValue(12.5);
      console.log($scope.toBeAddedToProgress.bool);
      console.log(Idea.getProgressValue());
    }

  });

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
      });
    });
  };

  $scope.saveData = function() {
    var title = $scope.title;

    if ($scope.toBeAddedToProgress.bool === true) {
      Idea.updateProgressValue(12.5);
      $scope.toBeAddedToProgress = false;
    }

    session.child('page8').set({
      title: title
    });
  };


}]);

ideaPlanner.directive("removeMe", function($rootScope) {
  return {
    link: function(scope, element, attrs) {
      element.bind("click", function() {
        element.remove();
      });
    }
  }

});
