'use strict';

angular.module('movieBrewApp')
  .directive('movieSlideDown', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        scope.$watch(attrs.movieSlideDown, function(nv, ov) {
          if (nv !== null) {
            element.hide();
            element.slideDown();
          }
        });
      }
    };
  });
