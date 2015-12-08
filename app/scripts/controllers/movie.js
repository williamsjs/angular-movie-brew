'use strict';

/**
 * @ngdoc function
 * @name movieBrewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieBrewApp
 */
angular.module('movieBrewApp')
  .controller('MovieCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.movieData = "";
    $scope.tomatometer = "";

    $scope.searchApi = function() {
      if ($scope.movie) {
        var path = "http://www.omdbapi.com/?t=" + $scope.movie + "&tomatoes=true";
        $http.get(path).success(function(data) {
          $scope.movieData = data.Year + " " + data.Title   ;
          $scope.tomatometer = data.tomatoMeter + "%";
        });
        $scope.movie = '';
      };
    };

  }]);
