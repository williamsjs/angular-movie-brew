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
      $scope.movie = Movies.getMovie(title, year);
    };

    $scope.searchMovies = function() {
      $scope.movies = null;
      $scope.movie = null;
      Movies.searchMovie($scope.titles).then(function(movies) {
        if (movies.Search != undefined) {
          var fullList = movies.Search;
          $scope.movies = Movies.filterMovies(fullList);
        } else {
          $scope.movie = {Title: "No Movie Found"};
        }
      });
    }


  }]);
