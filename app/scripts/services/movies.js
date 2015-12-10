'use strict'

angular.module('movieBrewApp')
  .service('Movies', ['Restangular', function(Restangular) {

    var path = 'http://omdbapi.com/?t=';
    var searchPath = 'http://omdbapi.com/?s='
    var tomatoes = "&tomatoes=true"

    this.getMovie = function(title, year) {
      return Restangular.oneUrl('movie', path + title + tomatoes + '&y=' + year).get();
    };

    this.searchMovie = function(title) {
      title = title.split(' ').join('+');
      console.log(title);
      return Restangular.oneUrl('movies', 'http://omdbapi.com/?s=' + title).get();
    }

  }]);
