ideaPlanner.controller("businessCtrl", ['$scope', 'Idea', function($scope, Idea) {

	var images = ['hipsters', 'emo', 'fanatics', 'family'];
	var money = ['subscriptions', 'one time fee', 'advertising', 'sponsors', 'charity']
	$scope.input = false;
	$scope.pickedPerson = null;
	$scope.pickedMoney = null;

$scope.returnAllImg = function() {
	return images;
}

$scope.returnAllMoney = function() {
	return money;
}

$scope.pickPerson = function(id) {
	$scope.pickedPerson = id;
	$scope.input = true;
}

$scope.getPickedPerson = function() {
	if ($scope.pickedPerson == null) {
		return 'mark'
	} else {
		return $scope.pickedPerson;
	}
}

$scope.pickMoney = function(id) {
	$scope.pickedMoney = id;
	$scope.input = true;
}

$scope.getPickedMoney = function() {
	if ($scope.pickedMoney == null) {
		return '?';
	} else {
		return $scope.pickedMoney;
	}
}

	var session = Idea.getSessionID();

	$scope.saveData = function () {

		// Function run through factory to update progressbar. 10 is just a approx. weighted number of total progress.
		Idea.updateProgressValue(10);

/*		if ($scope.problem || $scope.opportunity !== undefined) {
			var problem = $scope.problem;
			var opportunity = $scope.opportunity;
		} else {
			var problem = '';
			var opportunity = '';
		}
		if ($scope.problem2 || $scope.opportunity2 !== undefined) {
			var problem2 = $scope.problem2;
			var opportunity2 = $scope.opportunity2;
		} else {
			var problem2 = '';
			var opportunity2 = '';
		}*/

		session.child('page4').set({
			targetgroup: $scope.getPickedPerson(),
			method: $scope.getPickedMoney()
		});
	};

}]);