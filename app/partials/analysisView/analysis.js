'use strict';

ideaPlanner.controller("analysisCtrl", ['$scope', 'Idea', function($scope, Idea) {

    var ref = new Firebase("https://sizzling-torch-8958.firebaseio.com");

    $scope.labels =["Experience", "Cost", "Quality", "Marketshare", "Main idea"];

    $scope.data = [
        [30, 60, 5, 30, 55],
        [20, 10, 15, 5, 10],
        [10, 40, 25, 20, 25]
    ];

    $scope.series = ['My company', 'Other Company', 'Other Company 2']

    $scope.colours = ['#8731BE']


    $scope.saveData = function () {
        // Function run through factory to update progressbar. 10 is just a approx. weighted number of total progress.
        Idea.updateProgressValue(10);

        var session = Idea.getSessionID();

        session.child('page5').set({
            Tech: $scope.data[0][0],
            Work: $scope.data[0][1],
            Hardware: $scope.data[0][2],
            Software: $scope.data[0][3],
            PR: $scope.data[0][4]
        });

    };

    $scope.resetData = function () {
        ref.once("value", function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var key = childSnapshot.key();
                ref.child(key).child('page5').remove();
            });
        });
    };

}]);