'use strict';

ideaPlanner.controller("analysisCtrl", ['$scope', 'Idea', function($scope, Idea) {

    var ref = new Firebase("https://sizzling-torch-8958.firebaseio.com");

    $scope.labels =["Experience", "Cost", "Quality", "Marketshare", "Main idea"];

    $scope.data = [
        [30, 60, 5, 30, 55],
        [20, 10, 15, 5, 10],
        [10, 40, 25, 20, 25]
    ];

    $scope.series = ['My company', 'Other Company', 'Other Company 2'];

    $scope.colours = ['#8731BE'];


    $scope.saveData = function () {
        // Function run through factory to update progressbar. 10 is just a approx. weighted number of total progress.
        Idea.updateProgressValue(10);

        var session = Idea.getSessionID();

        session.child('page6').set({
            Mycompany: {
                Experience: $scope.data[0][0],
                Cost: $scope.data[0][1],
                Quality: $scope.data[0][2],
                Marketshare: $scope.data[0][3],
                MainIdea: $scope.data[0][4]
            },
            othercompany: {
                Experience: $scope.data[1][0],
                Cost: $scope.data[1][1],
                Quality: $scope.data[1][2],
                Marketshare: $scope.data[1][3],
                MainIdea: $scope.data[1][4]
            },
            othercompany2: {
                Experience: $scope.data[2][0],
                Cost: $scope.data[2][1],
                Quality: $scope.data[2][2],
                Marketshare: $scope.data[2][3],
                MainIdea: $scope.data[2][4]
            }
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