'use strict';

ideaPlanner.controller("mapCtrl", ['$scope', 'Idea', '$location', function($scope, Idea, $location, uiGmapGoogleMapApi) {

  var session = Idea.getSessionID();

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
