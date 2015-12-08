'use strict';

/**
 * @ngdoc overview
 * @name movieBrewApp
 * @description
 * # movieBrewApp
 *
 * Main module of the application.
 */
angular
  .module('movieBrewApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('movie', {
        url: '/movie',
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl'
      })
      .state('/about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })

    $urlRouterProvider.otherwise('/movie');

  });
