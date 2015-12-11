'use strict'

angular.module('movieBrewApp')
  .service('Movies', ['Restangular', function(Restangular) {

    var path = 'http://omdbapi.com/?t=';
    var searchPath = 'http://omdbapi.com/?s='
    var tomatoes = "&tomatoes=true"

    this.getMovie = function(title, year) {
      var movie = Restangular.oneUrl('movie', path + title + tomatoes + '&y=' + year).get();
      // TODO create beer factory and implement api
      return movie;
    };

    this.searchMovie = function(title) {
      title = title.split(' ').join('+');
      return Restangular.oneUrl('movies', searchPath + title).get();
    }

  }]);
