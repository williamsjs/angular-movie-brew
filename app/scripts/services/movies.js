'use strict'

angular.module('movieBrewApp')
  .service('Movies', ['Restangular', function(Restangular) {
    this.getFoo = function() {
      return "foo";
    }
  }]);
