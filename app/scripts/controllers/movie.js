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

    $scope.searchApi = function() {
      $scope.movie = Movies.getMovie($scope.title);
    };

    $scope.searchMovies = function() {
      Movies.searchMovie($scope.titles).then(function(movies) {
        $scope.movies = movies.Search;
      });
    }


  }]);
