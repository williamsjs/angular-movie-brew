'use strict';

angular.module('movieBrewApp')
  .directive('toggle', function() {
    return function(scope, elem, attrs) {
        scope.$on('event:toggle', function() {
            elem.hide();
            elem.slideDown();
        })
    };
  })
