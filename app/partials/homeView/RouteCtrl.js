ideaPlanner.controller('RouteCtrl', ['$scope', '$routeParams', 'Idea', function($scope, $routeParams, Idea) {
    
    $scope.session = Idea.getSessionID().key();

    $routeParams.fullpage = $scope.session;

}]);
