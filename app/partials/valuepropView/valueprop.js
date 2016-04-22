'use strict';

ideaPlanner.controller('ValueCtrl', ["$scope", '$firebaseObject', 'Idea', '$location', function($scope, $firebaseObject, Idea, $location) {

  var ref = new Firebase("https://sizzling-torch-8958.firebaseio.com");
  $scope.data = $firebaseObject(ref);

  var session = Idea.getSessionID();

  // Gör så att urlen blir samma på reload. Funkar oftast?!
  $location.url(session.key());

  $scope.values = [{ option: "select a value..." },
    { option: "fun" },
    { option: "happiness" },
    { option: "money" },
    { option: "security" }
  ];

  $scope.persons = [{ option: "select a picture..." },
    { option: "businessman" },
    { option: "businesswomen" },
    { option: "man" },
    { option: "women" }
  ];

  $scope.toBeAddedToProgress = {
    bool: true
  };

  if ($scope.cards === undefined) {
    $scope.cards = [];
  }

  $scope.card = function() {
    this.nickname = "";
    this.name = $scope.persons[0];
    this.cardId = "card" + ($scope.cards.length + 1);
    this.image = $scope.changeImage($scope.persons[0]);
    this.value = $scope.values[0];
  };

  $scope.animationDiv = angular.element(document.querySelector("#valueAnimate"));

  $scope.addNewCard = function() {
    var newCard = new $scope.card();
    $scope.cards.push(newCard);
  };

  $scope.changeImage = function(selectedImage) {
    if (selectedImage["option"] !== "select a picture...") {
      var selectedImage = selectedImage["option"] + ".jpg";
      return selectedImage;
    } else {
      return "anonym.jpg";
    }
  };

  $scope.changeValue = function(chosenValue) {
    $scope.animationDiv.empty();
    if (chosenValue !== "select a value...") {
      var selectedValue = chosenValue["option"] + ".png";
      var animInstance = $scope.animationDiv.append("<img src=" + "images/" + selectedValue + " class='animated fadeInRightBig slower'>");
    }
  };

  $scope.removeCard = function(cardToRemove) {
    for (var i = 0; i < $scope.cards.length; i++) {
      if (cardToRemove.cardId == $scope.cards[i].cardId) {
        $scope.cards.splice(i, 1);
      }
    }
    $scope.writeDB();
  };

  $scope.writeDB = function() {
    for (var i = 0; i < $scope.cards.length; i++) {
      session.child('page2').child('stakeholders').child(i).set({
        card: $scope.cards[i].cardId,
        nickname: $scope.cards[i].nickname,
        name: $scope.cards[i].name.option,
        image: $scope.cards[i].image,
        value: $scope.cards[i].value.option
      });
    }
  };

}]);
