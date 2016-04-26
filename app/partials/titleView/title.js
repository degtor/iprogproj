'use strict';

ideaPlanner.controller("titleCtrl", ['$scope', 'Idea', '$window', '$location', function($scope, Idea, $window, $location) {

  $scope.toBeAddedToProgress = {
    bool: true
  };

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
    link:function(scope,element,attrs)
    {
      element.bind("click",function() {
        element.remove();
      });
    }
  }

});
