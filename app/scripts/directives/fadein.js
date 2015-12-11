'use strict';

angular.module('movieBrewApp')
  .directive('movieFadeIn', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        scope.$watch(attrs.movieFadeIn, function(nv, ov) {
          if (nv !== null) {
            angular.element('ul#movie-list').slideUp();
            element.hide();
            element.fadeIn();
          }
        })
      }
    }
  })
