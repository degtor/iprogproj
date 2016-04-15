ideaPlanner.controller('ProgressCtrl', ['$scope', 'Idea', function($scope, Idea) {

    var ref = new Firebase("https://sizzling-torch-8958.firebaseio.com");
    $scope.max = 200;
    $scope.dynamic = 0;

    $scope.dynamic = function () {
        return Idea.getProgressValue();
    };




}]);