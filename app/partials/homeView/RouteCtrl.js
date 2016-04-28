ideaPlanner.controller('RouteCtrl', ['$scope', '$routeParams', 'Idea', function($scope, $routeParams, Idea) {


 // NYTT STUFF HÄR
    $scope.session = Idea.startSession().key();

    $routeParams.fullpage = $scope.session;

}]);
