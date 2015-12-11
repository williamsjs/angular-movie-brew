'use strict';

angular.module('movieBrewApp')
  .directive('movieSlideDown', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/movie_list.html',
    };
  });
