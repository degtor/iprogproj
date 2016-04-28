ideaPlanner.controller('ProgressCtrl', ['$scope', 'Idea', function($scope, Idea) {

  $scope.max = 200;
  $scope.dynamic = 0;

  $scope.dynamic = function() {
    return Idea.getProgressValue();
  };


}]);
