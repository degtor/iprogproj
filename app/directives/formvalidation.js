'use strict';

ideaPlanner.directive('ifInteracted', ['Idea', function(Idea) {
  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      var inputElements = [];
      var scopeToUse;
      var trues = 0;

      if (scope.toBeAddedToProgress !== "undefined") {
        scopeToUse = scope;
      } else {
        scopeToUse = scope.$parent;
      }

      var inputs = elem[0].querySelectorAll("input");
      if (typeof inputs !== "undefined") {
        if (typeof inputs.length !== "undefined") {
          for (var i = 0; i < inputs.length; i++) {
            inputElements.push(inputs[i]);
          }
        } else {
          inputElements.push(inputs[0]);
        }
      }

      var textareas = elem[0].querySelectorAll("textarea");
      if (typeof textareas !== "undefined") {
        if (typeof textareas.length !== "undefined") {
          for (var i = 0; i < textareas.length; i++) {
            inputElements.push(textareas[i]);
          }
        } else {
          inputElements.push(textareas[0]);
        }
      }

      var selects = elem[0].querySelectorAll("select");
      if (typeof selects !== "undefined") {
        if (typeof selects.length !== "undefined") {
          for (var i = 0; i < selects.length; i++) {
            inputElements.push(selects[i]);
          }
        } else {
          inputElements.push(selects[0]);
        }
      }

      angular.element(inputElements).bind("change", function(event) {
        if (angular.element(event.target).hasClass("ng-dirty")) {
          isDirty(event.target);
        }
      });

      var isDirty = function(dirtyElement) {
        var countToMatch = inputElements.length;

        for (var i = 0; i < inputElements.length; i++) {
          if (inputElements[i] === dirtyElement) {
            trues = trues + 1;
            inputElements[i] = "DONE!";
          }
        }
        if (countToMatch === trues) {
          scopeToUse.writeDB();
          if (scopeToUse.toBeAddedToProgress.bool === true) {
            Idea.updateProgressValue(12.5);
            scopeToUse.toBeAddedToProgress.bool = false;
          }
        }
      };
    }
  };
}]);
