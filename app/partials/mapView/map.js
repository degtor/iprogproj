'use strict';

ideaPlanner.controller("mapCtrl", ['$scope', 'Idea', '$location', function($scope, Idea, $location, uiGmapGoogleMapApi) {

  // NYTT STUFF HÄR
  var session = Idea.getSessionID();

  // DETTA SKA LÄSA IN värdena på scope från db
  session.once('value', function(snapshot) {
    var page7 = snapshot.val().page7;
    if (page7 !== undefined) {
      console.log($scope.$$childHead);
      $scope.$$childHead.search1.place = page7.locations[1].place;
      $scope.$$childHead.search1.marker.coords.id = page7.locations[1].id;
      $scope.$$childHead.search1.marker.coords.latitude = page7.locations[1].latitude;
      $scope.$$childHead.search1.marker.coords.longitude = page7.locations[1].longitude;
      $scope.$$childHead.search2.place = page7.locations[2].place;
      $scope.$$childHead.search2.marker.coords.id = page7.locations[2].id;
      $scope.$$childHead.search2.marker.coords.latitude = page7.locations[2].latitude;
      $scope.$$childHead.search2.marker.coords.longitude = page7.locations[2].longitude;
      $scope.$$childHead.search3.place = page7.locations[3].place;
      $scope.$$childHead.search3.marker.coords.id = page7.locations[3].id;
      $scope.$$childHead.search3.marker.coords.latitude = page7.locations[3].latitude;
      $scope.$$childHead.search3.marker.coords.longitude = page7.locations[3].longitude;
      Idea.updateProgressValue(12.5);
      $scope.$$childHead.toBeAddedToProgress.bool = false;
    }
    $scope.$$childHead.$apply();
  });

  $scope.writeDB = function(place) {
    console.log(place);
    if (place !== undefined) {
      session.child('page7').child('locations').child(place.marker.id).set({
        place: place.place,
        id: place.marker.id,
        latitude: place.marker.coords.latitude,
        longitude: place.marker.coords.longitude
      });
    }
  };

}]);
