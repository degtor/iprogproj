ideaPlanner.controller('ProblemCtrl', ['$scope', '$location', 'Idea',
  function($scope, $location, Idea) {

    $scope.toBeAddedToProgress = {
      bool: true
    };

    $scope.problem = "";
    $scope.problem2 = "";
    $scope.opportunity = "";
    $scope.opportunity2 = "";

    // NYTT STUFF HÄR
    var session = Idea.getSessionID();
    console.log(session.key());

    // DETTA SKA LÄSA IN värdena på scope från db
    session.once('value', function(snapshot) {
      var page1 = snapshot.val().page1;
      if (page1 !== undefined) {
        $scope.problem = page1.problem;
        $scope.opportunity = page1.opportunity;
        $scope.problem2 = page1.problem2;
        $scope.opportunity2 = page1.opportunity2;
        $scope.toBeAddedToProgress.bool = false;
        Idea.updateProgressValue(12.5);
      }
    });



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
        opportunity2: opportunity2,
        addProgress: $scope.toBeAddedToProgress.bool
      });
    };

  }
]);

ideaPlanner.directive("addinput", function($compile) {
  return function(scope, element, attrs) {
    element.bind("click", function() {
      angular.element(document.getElementById('space-for-input')).append($compile('<div class="row" if-interacted><div class="col-xs-4"> <textarea class="form-control" ng-model="problem2" placeholder="Problem" rows="5"></textarea></div><span class="glyphicon glyphicon-arrow-right"></span><div class="col-xs-4"> <textarea class="form-control" ng-model="opportunity2" placeholder="Opportunity" rows="5"></textarea></div></div>')(scope));
      element.remove();
    });
  };
});
