ideaPlanner.controller('ProblemCtrl', ['$scope', '$firebaseObject', function($scope, $firebaseObject) {

    var ref = new Firebase("https://sizzling-torch-8958.firebaseio.com");
    var fb = $firebaseObject(ref);

    $scope.data = $firebaseObject(ref);


    $scope.saveData = function () {
        var problem = $scope.problem;
        var opportunity = $scope.opportunity;
        if ($scope.problem2 || $scope.opportunity2 !== undefined) {
            var problem2 = $scope.problem2;
            var opportunity2 = $scope.opportunity2;
        } else {
            var problem2 = '';
            var opportunity2 = '';
        }

        ref.once("value", function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var key = childSnapshot.key();
                ref.child(key).child('page1').update({
                    problem: problem,
                    opportunity: opportunity,
                    problem2: problem2,
                    opportunity2: opportunity2
                });
            });
        });
    };

}]);

ideaPlanner.directive("addinput", function($compile){
    return function(scope, element, attrs){
        element.bind("click", function(){
            angular.element(document.getElementById('space-for-input')).append($compile('<div class="row"><div class="col-xs-4"><input type="text" ng-model="problem2" placeholder="Problem"></input></div><span class="glyphicon glyphicon-arrow-right"></span><div class="col-xs-4"><input type="text" ng-model="opportunity2" placeholder="Opportunity"></input></div></div>')(scope));
            element.remove();
        });
    };
});