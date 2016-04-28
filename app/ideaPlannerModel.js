ideaPlanner.factory('Idea', ['$location', function($location) {

  // Skeleton database is set up in firebasesetup.js
  // Ref is a connection to database/pages
  var ref = new Firebase("https://sizzling-torch-8958.firebaseio.com");

  //Clears database on initiation.

  var progressValue = 0;
  // Skeleton database is set up in firebasesetup.js
  // Ref is a connection to database/pages


  //Clears database on initiation.
  //ref.remove();

  var getLink = function() {
    return $location.absUrl();
  };


  // Start ID
  var startSession = function() {
    var ref = new Firebase("https://sizzling-torch-8958.firebaseio.com");
    var startID = ref.push({ 'user': 'user' });
    return startID;
  };

  // Skapar session ID till controllers på URLEN man befinenrs sig på. bajs blir bajs.
  var getSessionID = function() {
    var sessionID = new Firebase('https://sizzling-torch-8958.firebaseio.com/' + $location.url());
    return sessionID;
  };

  // sessionID stores the unique value created on initial push. Used for referencing a users session.
  //var sessionID = ref.push({'user': 'user'});

  var updateProgressValue = function(val) {
    progressValue = progressValue + val;
  };

  var getProgressValue = function() {
    return progressValue;

  };

  return {
    getLink: getLink,
    updateProgressValue: updateProgressValue,
    getProgressValue: getProgressValue,
    getSessionID: getSessionID,
    startSession: startSession
  };

}]);
