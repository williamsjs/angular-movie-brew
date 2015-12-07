'use strict';

/**
 * @ngdoc function
 * @name movieBrewApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the movieBrewApp
 */
angular.module('movieBrewApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
