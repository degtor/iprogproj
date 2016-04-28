'use strict';

ideaPlanner.controller("mapCtrl", ['$scope', 'Idea', '$location', function($scope, Idea, $location, uiGmapGoogleMapApi) {

  // NYTT STUFF HÄR
  var session = Idea.getSessionID();
  console.log(session.key());

  // DETTA SKA LÄSA IN värdena på scope från db
  session.once('value', function(snapshot) {
    console.log(snapshot.val());
    var page7 = snapshot.val().page7;
    $scope.problem = page1.problem;
    $scope.opportunity =  page1.opportunity;
    $scope.problem2 =  page1.problem2;
    $scope.opportunity2 = page1.opportunity2;
  });


  // SLUT HÄR

  $scope.writeDB = function(place) {
    console.log(place);
    if (place !== undefined) {
      session.child('page7').child('locations').child(place.marker.id).set({
        id: place.marker.id,
        latitude: place.marker.coords.latitude,
        longitude: place.marker.coords.longitude
      });
    }
  };

}]);
