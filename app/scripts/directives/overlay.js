'use strict';

angular.module('movieBrewApp')
  .directive('mvOverlay', ['$timeout', 'BeerGifs', function($timeout, BeerGifs) {
    return {
      restrict: 'E',
      templateUrl: 'views/beer.html',
      link: function(scope, element) {
        angular.element('div#beer-overlay').show();
        angular.element('div#beer-details').hide();
        angular.element('div#gif').css({
          'background-image': BeerGifs.randomBeer()
        });
        element.hide();
        element.fadeIn();
        $timeout(function() {
          angular.element('div#overlay-timeout').fadeOut(1500);
          angular.element('div#beer-details').fadeIn(3000);
        }, 2500);
      }
    };
  }]);
