'use strict';

/*
angular.module('myApp.business', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/business', {
            templateUrl: '/partials/businessView/business.html',
            controller: 'BusinessCtrl'
        });
    }]) */

ideaPlanner.controller('ValueCtrl', ["$scope", function($scope) {
  $scope.values = ["select a value...", "fun", "happiness", "money", "security"];
  $scope.persons = ["select a picture...", "businessman", "businesswomen", "man", "women"];
  $scope.cards = [];
  $scope.card = function() {
    console.log("Hello!");
    this.id = $scope.cards.length + 1;
    this.picture = "anonym.jpg";
    this.name = $scope.persons[0];
    this.value = $scope.values[0];
  };

  $scope.animationDiv = angular.element(document.querySelector("#valueAnimate"));

  $scope.addNewCard = function() {
    var newCard = new $scope.card();
    console.log(newCard);
    $scope.cards.push(newCard);
  };

  $scope.changeImage = function(selectedImage) {
    var selectedImage = selectedImage + ".jpg";
    $scope.image = selectedImage;
  };

  $scope.changeValue = function(chosenValue) {
    $scope.animationDiv.empty();
    if (chosenValue !== "select a value...") {
      var selectedValue = chosenValue + ".png";
      var animInstance = $scope.animationDiv.append("<img src=" + "images/" + selectedValue + " class='animated fadeInRightBig slower'>");
    }
  };

}]);
