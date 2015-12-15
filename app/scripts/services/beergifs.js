'use strict';

/**
 * @ngdoc service
 * @name movieBrewApp.beerGifs
 * @description
 * # beerGifs
 * Service in the movieBrewApp.
 */
angular.module('movieBrewApp')
  .service('BeerGifs', function () {
    var beerGifs = ['stone_cold', 'chappelle_beer', 'bubbling_beer', 'drunk_dog', 'homer'];

    this.randomBeer = function() {
      var beer = beerGifs[Math.floor(Math.random()*beerGifs.length)];
      return 'url("../images/' + beer + '.gif")';
    }
  });
