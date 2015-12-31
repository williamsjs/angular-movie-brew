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

    $scope.setBeer = function() {
      $scope.beer = Beers.brew($scope.movie.imdbRating).then(function(beers) {
        var beer = Beers.randomBeer(beers.response.beers.items);
        $scope.beer = beer.beer; //confusing, I know
        $scope.brewery = beer.brewery;
      });
    };

    $scope.exitBeer = function() {
      $scope.beer = '';
    };

    $scope.getMovie = function(title, year) {
      $scope.movie = Movies.getMovie(title, year);
    };

    $scope.searchMovies = function() {
      $scope.movies = null;
      $scope.movie = null;
      Movies.searchMovie($scope.titles).then(function(movies) {
        if (movies.Search !== undefined) {
          var fullList = movies.Search;
          $scope.movies = Movies.filterMovies(fullList);
        } else {
          $scope.movie = {Title: 'No Movie Found'};
        }
      });
    };


  }]);
