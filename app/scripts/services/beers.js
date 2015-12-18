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

    var first_path = 'https://api.untappd.com/v4/search/beer?q='
    var second_path = '&client_id=83731B563B41B75E1E144592DAE5264AB515A6B8&client_secret=8E342ED620BBEF52C9D05932DA0E4B6C52BB97E5';
    var name = '';

    this.brew = function(rating) {
      return Restangular.oneUrl('beers', first_path + 'bud' + second_path).get();
    };

  }]);
