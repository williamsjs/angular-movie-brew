'use strict';

/**
 * @ngdoc function
 * @name movieBrewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieBrewApp
 */
angular.module('movieBrewApp')
  .controller('MovieCtrl', ['$scope', '$timeout', 'Movies', function($scope, $timeout, Movies) {

    $scope.movie = null;
    $scope.movies = null;

    $scope.getMovie = function(title, year) {
      $scope.movies = null;
      $scope.movie = Movies.getMovie(title, year).then(function(movie) {
        $scope.movie = movie;
      });
    };

    $scope.searchMovies = function() {
      $scope.movies = null;
      Movies.searchMovie($scope.titles).then(function(movies) {
        if (movies.Search != undefined) {
          $scope.movies = movies.Search;
        } else {
          $scope.movie.Title = "No Movie Found";
        }
      });
    }


  }]);
