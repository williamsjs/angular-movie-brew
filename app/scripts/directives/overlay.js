'use strict';

angular.module('movieBrewApp')
  .directive('mvOverlay', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/beer.html',
      link: function(scope, element, attrs) {
        element.hide();
        element.fadeIn();
      }
    }
  });
