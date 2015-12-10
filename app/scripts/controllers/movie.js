'use strict';

/**
 * @ngdoc function
 * @name movieBrewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieBrewApp
 */
angular.module('movieBrewApp')
  .controller('MovieCtrl', ['$scope', 'Movies', function($scope, Movies) {

    $scope.movie = {};
    $scope.movies = [];

    $scope.getMovie = function(title, year) {
      Movies.getMovie(title, year).then(function(movie) {
        $scope.movie = movie;
      });
    };

    $scope.searchMovies = function() {
      Movies.searchMovie($scope.titles).then(function(movies) {
        if (movies.Search == undefined) {
          $scope.movies = false;
        } else {
          $scope.movies = movies.Search;
        }
      });
    }


  }]);
