'use strict';

ideaPlanner.controller("mapCtrl", ['$scope', '$firebaseObject', 'Idea', '$location', function($scope, $firebaseObject, Idea, $location, uiGmapGoogleMapApi) {

  var ref = new Firebase("https://sizzling-torch-8958.firebaseio.com");
  $scope.data = $firebaseObject(ref);
  var session = Idea.getSessionID();


  $scope.save = function(place) {
    session.child('page7').child('locations').child(place.marker.id).set({
      id: place.marker.id,
      latitude: place.marker.coords.latitude,
      longitude: place.marker.coords.longitude
    });
  };

}]);
