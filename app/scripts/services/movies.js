'use strict'

angular.module('movieBrewApp')
  .service('Movies', ['Restangular', '$q', '$rootScope', function(Restangular, $q, $rootScope) {

    var path = 'http://omdbapi.com/?t=';
    var searchPath = 'http://omdbapi.com/?s='
    var tomatoes = "&tomatoes=true"

    function validateYearFormat(year) {
      if (year.length != 4) {
        return null;
      } else {
        return "&y" + year;
      }
    }

    this.getMovie = function(title, year) {
      return Restangular.oneUrl('movie', path + title + tomatoes + validateYearFormat(year)).get().$object;
      // TODO create beer factory and implement api
    };

    this.searchMovie = function(title) {
      title = title.split(' ').join('+');
      return Restangular.oneUrl('movies', searchPath + title).get();
    };

    this.filterMovies = function(list) {
      var newList = [];
      for (var i=0; i < list.length; i++) {
        if (list[i].Type == 'movie') {
          newList.push(list[i]);
        }
      };
      return newList;
    };

  }]);
