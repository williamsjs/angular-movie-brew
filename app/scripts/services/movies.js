'use strict'

angular.module('movieBrewApp')
  .service('Movies', ['Restangular', function(Restangular) {

    var path = 'http://omdbapi.com/?t=';
    var searchPath = 'http://omdbapi.com/?s='
    var tomatoes = "&tomatoes=true"

    this.getMovie = function(title) {
      return Restangular.oneUrl('movie', path + title + tomatoes).get().$object;
    };

    this.searchMovie = function(title) {
      return Restangular.oneUrl('movies', 'http://omdbapi.com/?s=' + title).get();
    }

  }]);
