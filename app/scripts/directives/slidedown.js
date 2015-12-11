'use strict';

angular.module('movieBrewApp')
  .directive('movieSlideDown', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        scope.$watch(attrs.movieFadeOut, function(nv, ov) {
          if (nv !== null) {
            element.hide();
            element.slideDown();
          } else if (nv == "slide up"){
            element.slideUp();
          }
        });
      }
    };
  });
