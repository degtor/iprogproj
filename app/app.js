'use strict';

var ideaPlanner = angular.module('myApp', ['ngRoute', 'duScroll', 'firebase', 'chart.js', 'angular-venn', 'ui.bootstrap.progressbar', 'ui.bootstrap.tpls', 'uiGmapgoogle-maps']);

ideaPlanner.config(function($routeProvider) {

  $routeProvider.when('/', {
      controller: 'RouteCtrl',
      templateUrl: 'partials/homeView/home.html'
    })
    .when('/:fullpage', {
      templateUrl: 'partials/fullpageView/fullpage.html'
    })

  .otherwise({ redirectTo: '/' });
});

ideaPlanner.config(function(uiGmapGoogleMapApiProvider) {
  uiGmapGoogleMapApiProvider.configure({
    //key: 'YOUR KEY HERE',
    v: '3.17',
    libraries: 'weather,geometry,visualization,places'
  });
});

ideaPlanner.controller('mapShit', function($scope, uiGmapGoogleMapApi) {
  // Do stuff with your $scope.
  // Note: Some of the directives require at least something to be defined originally!
  // e.g. $scope.markers = []

  // uiGmapGoogleMapApi is a promise.
  // The "then" callback function provides the google.maps object.
  $scope.toBeAddedToProgress = {
    bool: true
  };

  $scope.options = {
    icon: "images/marker.png"
  };

  uiGmapGoogleMapApi.then(function(maps) {

    $scope.map = {
      center: {
        latitude: 0,
        longitude: 0
      },
      zoom: 2,
      disableDefaultUI: true
    };

    var geocoder = new maps.Geocoder();

    $scope.onAdress = function(place) {
      geocoder.geocode({ 'address': place.place }, function(results, status) {
        if (status === maps.GeocoderStatus.OK) {
          var lat = results[0].geometry.location.lat();
          var lng = results[0].geometry.location.lng();
          place.marker.coords.latitude = lat;
          place.marker.coords.longitude = lng;
          $scope.$apply();
          $scope.$parent.writeDB(place);
        }
      });
    };

    $scope.place1 = document.getElementById("place1");
    $scope.autocomplete1 = new maps.places.Autocomplete($scope.place1);
    $scope.search1 = {
      place: "",
      marker: {
        id: 1,
        icon: 'images/marker.png',
        coords: {
          latitude: 0,
          longitude: 0
        }
      }
    };

    $scope.place2 = document.getElementById("place2");
    $scope.autocomplete2 = new maps.places.Autocomplete($scope.place2);
    $scope.search2 = {
      place: "",
      marker: {
        icon: 'images/marker.png',
        id: 2,
        coords: {
          latitude: 0,
          longitude: 0
        }
      }
    };

    $scope.place3 = document.getElementById("place3");
    $scope.autocomplete3 = new maps.places.Autocomplete($scope.place3);
    $scope.search3 = {
      place: "",
      marker: {
        id: 3,
        "icon": 'images/marker.png',
        coords: {
          latitude: 0,
          longitude: 0
        }
      }
    };

  });
});