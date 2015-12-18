'use strict';

/**
 * @ngdoc function
 * @name movieBrewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieBrewApp
 */
angular.module('movieBrewApp')
  .controller('MovieCtrl', ['$scope', '$timeout', 'Movies', 'Beers', function($scope, $timeout, Movies, Beers) {

    $scope.movie = null;
    $scope.movies = null;
    $scope.beer = false;

    $scope.setBeer = function() {
      $scope.beer = Beers.brew($scope.movie.imdbRating).then(function(beers) {
        $scope.beer = beers;
        console.log(beers.response.beers[0].beer.beer_abv);
      });
    };

    $scope.exitBeer = function() {
      $scope.beer = false
    };

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
