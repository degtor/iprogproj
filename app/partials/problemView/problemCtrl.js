ideaPlanner.controller('ProblemCtrl', ['$scope', '$firebaseObject', 'Idea', '$location', function($scope, $firebaseObject, Idea, $location) {

  var ref = new Firebase("https://sizzling-torch-8958.firebaseio.com");

  $scope.toBeAddedToProgress = {
    bool: true
  };

  $scope.data = $firebaseObject(ref);

  var session = Idea.getSessionID();

  // Gör så att urlen blir samma på reload. Funkar oftast?!
  $location.url(session.key());

  $scope.writeDB = function() {

    // Function run through factory to update progressbar. 10 is just a approx. weighted number of total progress.
    //Idea.updateProgressValue(10);

    if ($scope.problem || $scope.opportunity !== undefined) {
      var problem = $scope.problem;
      var opportunity = $scope.opportunity;
    } else {
      var problem = '';
      var opportunity = '';
    }
    if ($scope.problem2 || $scope.opportunity2 !== undefined) {
      var problem2 = $scope.problem2;
      var opportunity2 = $scope.opportunity2;
    } else {
      var problem2 = '';
      var opportunity2 = '';
    }


    session.child('page1').set({
      problem: problem,
      opportunity: opportunity,
      problem2: problem2,
      opportunity2: opportunity2
    });
  };

  /* $scope.resetData = function () {
       ref.once("value", function (snapshot) {
           snapshot.forEach(function (childSnapshot) {
               var key = childSnapshot.key();
               ref.child(key).child('page1').remove();
           });
       });
   };*/

}]);

ideaPlanner.directive("addinput", function($compile) {
  return function(scope, element, attrs) {
    element.bind("click", function() {
      angular.element(document.getElementById('space-for-input')).append($compile('<div class="row" if-interacted><div class="col-xs-4"> <textarea class="form-control" ng-model="problem2" placeholder="Problem" rows="5"></textarea></div><span class="glyphicon glyphicon-arrow-right"></span><div class="col-xs-4"> <textarea class="form-control" ng-model="opportunity2" placeholder="Opportunity" rows="5"></textarea></div></div>')(scope));
      element.remove();
    });
  };
});
