ideaPlanner.controller('ProgressCtrl', ['$scope', 'Idea', '$window', '$location', function($scope, Idea, $window, $location) {

    var ref = new Firebase("https://sizzling-torch-8958.firebaseio.com");
    $scope.max = 200;
    $scope.dynamic = 0;

    $scope.dynamic = function () {
        return Idea.getProgressValue();
    };


    $scope.mail = '';

    $scope.sendMail = function(){
        $window.open("mailto:"+ $scope.mail + "?subject=" + "My Pitch" +"&body="+ $location.absUrl() ,"_self");
    };



}]);