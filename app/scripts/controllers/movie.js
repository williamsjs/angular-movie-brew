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

    $scope.movie = {};
    $scope.movies = {};

    $scope.getMovie = function(title, year) {
      Movies.getMovie(title, year).then(function(movie) {
        $scope.movie = movie;
      });
    };

    $scope.searchMovies = function() {
      $scope.movies = {};
      $scope.movie = {};
      Movies.searchMovie($scope.titles).then(function(movies) {
        if (movies.Search != undefined) {
          $timeout(function() {
            $scope.movies = movies.Search;
          });
        } else {
          $scope.movie.Title = "No Movie Found";
        }
      });
    }


  }]);
