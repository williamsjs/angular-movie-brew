'use strict';

/**
 * @ngdoc service
 * @name movieBrewApp.beers
 * @description
 * # beers
 * Service in the movieBrewApp.
 */
angular.module('movieBrewApp')
  .service('Beers', ['Restangular', function(Restangular) {

    var first_path = 'https://api.untappd.com/v4/search/beer?q=';
    var second_path = '&client_id=83731B563B41B75E1E144592DAE5264AB515A6B8&client_secret=8E342ED620BBEF52C9D05932DA0E4B6C52BB97E5';

    var badBeer = ['bud', 'natural', 'coors'];
    var mediocreBeer = ['samuel+adams', 'blue+moon', 'newcastle'];
    var goodBeer = ['guiness', 'red+oak'];
    var greatBeer = ['sierra+nevada', 'stone'];

    var getRandomBeer = function(beerCritique) {
      return beerCritique[Math.floor(Math.random() * beerCritique.length)];
    };

    var determineBeerSearch = function(movieRating) {
      if (movieRating >= 9) {
        return getRandomBeer(greatBeer);
      } else if (movieRating >= 8) {
        return getRandomBeer(goodBeer);
      } else if (movieRating >= 4.5) {
        return getRandomBeer(mediocreBeer);
      } else {
        return getRandomBeer(badBeer);
      }
    };

    this.brew = function(rating) {
      return Restangular.oneUrl('beers', first_path + determineBeerSearch(rating) + second_path).get();
    };

    this.randomBeer = function(beerList) {
      return beerList[Math.floor(Math.random() * beerList.length)];
    };


  }]);
