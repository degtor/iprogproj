ideaPlanner.factory('Idea', function($location) {



  // Skeleton database is set up in firebasesetup.js
  // Ref is a connection to database/pages
  var ref = new Firebase("https://sizzling-torch-8958.firebaseio.com");

  //Clears database on initiation.

  // sessionID stores the unique value created on initial push. Used for referencing a users session.
  var sessionID = ref.push({ 'user': 'user' });

  var getSessionID = function() {
    return sessionID;
  };

  /*
      console.log($location.absUrl());
      // $location.path(sessionID.key());
      console.log($location.absUrl());
      console.log($location.url('/humbug'));
  */

  var progressValue = 0;

  var updateProgressValue = function(val) {
    progressValue = progressValue + val;
  };

  var getProgressValue = function() {
    return progressValue;

  };


  return {
    updateProgressValue: updateProgressValue,
    getProgressValue: getProgressValue,
    getSessionID: getSessionID
  }

  //getItems: getItems,
  //addItem: addItem,
  //updateItems: updateItems,
  //removeItem: removeItem


  /*//Submit answer to progress
    this.addToProgressBar = function(addedAnswer, viewId) {
        ref.on("value", function(snapshot) {
            var pages = snapshot.val();
            for (var each in pages) {
                if (pages[each].id == viewId) {
                    console.log(pages);

                    var newAnswer = ref2.child(pages);

                    newAnswer.update({
                        answer: addedAnswer
                    });

                } else {
                    alert("Error in submitToProgressBar")
                }
            }
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    };

    //Get answer from progress
    this.getFromProgressBar = function (viewId) {
        ref.on("value", function(snapshot) {
            var pages = snapshot.val();
            for (var each in pages) {
                if (pages[each].id == viewId) {
                    console.log(pages[each].id);
                    return pages[each].answer;
                } else {
                    alert("Error in getFromProgressBar")
                }
            }
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    };



return this;*/
});
