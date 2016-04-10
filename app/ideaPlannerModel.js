var FIREBASE_URI = "https://sizzling-torch-8958.firebaseio.com";

ideaPlanner.factory('Idea', ['$firebase', FIREBASE_URI, function ($firebase, FIREBASE_URI) {

    // Skeleton database is set up in firebasesetup.js
    // Ref is a connection to database/pages
    var ref = new Firebase(FIREBASE_URI);
    var items = $firebase(ref);


    var getItems = function () {
        return items;
    };

    var addItem = function (item) {
        items.$add(item);
    };

    var updateItems = function(id) {
        items.$save(id);
    };

    var removeItem = function(id) {
        items.$remove(id);
    };

    return {
        getItems: getItems,
        addItem: addItem,
        updateItems: updateItems,
        removeItem: removeItem
    }


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
}]);