'use strict'

angular.module('movieBrewApp')
  .service('Movies', ['Restangular', function(Restangular) {

    var path = 'http://omdbapi.com/?t=';
    var tomatoes = "&tomatoes=true"

    this.getMovie = function(title) {
      return Restangular.oneUrl('movie', path + title + tomatoes).get().$object;
    };

  }]);
