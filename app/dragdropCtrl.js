'use strict';


/* Dokumentation:

Repo: https://github.com/codef0rmer/angular-dragdrop
Exempel & metoder: http://codef0rmer.github.io/angular-dragdrop/#!/#%2F
Praktiskt exempel (egentligen, EXAKT detta): http://embed.plnkr.co/jAcWGF/

*/

ideaPlanner.controller('dragdropCtrl', function($scope, $timeout) {
  console.log($scope);
  $scope.images = [{ 'thumb': '1.png' }];
  $scope.list1 = [];
  angular.forEach($scope.images, function(val, key) {
    $scope.list1.push({});
  });

  $scope.list2 = [
    { 'title': 'Item 1', 'drag': true }
  ];

  $scope.startCallback = function(event, ui) {
    console.log('You started draggin');
  };

  $scope.stopCallback = function(event, ui) {
    console.log('Why did you stop draggin me?');
  };

  $scope.dragCallback = function(event, ui) {
    console.log('hey, look I`m flying');
  };

  $scope.dropCallback = function(event, ui) {
    console.log('hey, you dumped me :-(');
  };

  $scope.overCallback = function(event, ui) {
    console.log('Look, I`m over you');
  };

  $scope.outCallback = function(event, ui) {
    console.log('I`m not, hehe');
  };
});
