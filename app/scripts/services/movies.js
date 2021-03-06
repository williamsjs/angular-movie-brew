'use strict';

angular.module('movieBrewApp')
  .service('Movies', ['Restangular', function(Restangular) {

    var path = 'https://omdbapi.com/?t=';
    var searchPath = 'https://omdbapi.com/?s=';
    var tomatoes = '&tomatoes=true';

    function validateYearFormat(year) {
      if (year.length !== 4) {
        return null;
      } else {
        return '&y' + year;
      }
    }

    this.getMovie = function(title, year) {
      return Restangular.oneUrl('movie', path + title + tomatoes + validateYearFormat(year)).get().$object;
    };

    this.searchMovie = function(title) {
      title = title.split(' ').join('+');
      return Restangular.oneUrl('movies', searchPath + title).get();
    };

    this.filterMovies = function(list) { // exclude video games and shows... THIS IS 'MOVIE' BREW
      var newList = [];
      for (var i=0; i < list.length; i++) {
        if (list[i].Type === 'movie') {
          newList.push(list[i]);
        }
      }
      return newList;
    };

  }]);
