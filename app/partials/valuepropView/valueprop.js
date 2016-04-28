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

  session.once('value', function(snapshot) {
    console.log("HELLO, I'M RUNNING!");
    var data = snapshot.val();
    console.log(data);
    for (var i = 0; i < data.page2.stakeholders.length; i++) {
      console.log("This is first for loop");
      console.log(data.page2.stakeholders);
      $scope.addNewCard();
    }

    /*   return data.filter(
      function(data){return data.code == code}
  ); */

    for (var j = 0; j < $scope.cards.length; j++) {
      console.log("YEAH, second loop");
      $scope.cards[j].nickname = data.page2.stakeholders[j].nickname;
      $scope.cards[j].name = $scope.persons.filter(
        function(data.page2.stakeholders[j].name) {
          return $scope.persons.option == data.page2.stakeholders[j].name;
        });

      $scope.cards[j].cardId = data.page2.stakeholders[j].card;
      $scope.cards[j].image = data.page2.stakeholders[j].image;
      $scope.cards[j].value = data.page2.stakeholders[j].value;
    }
    console.log($scope.cards);
  });

  /*
            card: $scope.cards[i].cardId,
        nickname: $scope.cards[i].nickname,
        name: $scope.cards[i].name.option,
        image: $scope.cards[i].image,
        value: $scope.cards[i].value.option

          session.once('value', function(snapshot) {
      var page1 = snapshot.val();
      if (page1.problem2 === undefined) {
        $scope.problem = page1.page1.problem;
        $scope.opportunity = page1.page1.opportunity;
        $scope.$apply();
      } else {
        $scope.problem = page1.problem;
        $scope.opportunity = page1.opportunity;
        $scope.problem2 = page1.problem2;
        $scope.opportunity2 = page1.opportunity2;
      }
    }); */



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
    console.log(newCard);
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
    $scope.removeDB(cardToRemove);
  };

  $scope.writeDB = function() {
    for (var i = 0; i < $scope.cards.length; i++) {
      session.child('page2').child('stakeholders').child(i).set({
        card: $scope.cards[i].cardId,
        nickname: $scope.cards[i].nickname,
        name: $scope.cards[i].name,
        image: $scope.cards[i].image,
        value: $scope.cards[i].value
      });
    }
  };

  $scope.removeDB = function(toRemove) {
    session.child('page2').child('stakeholders').child(toRemove.cardId).remove();
  };

}]);
