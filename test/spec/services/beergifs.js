'use strict';

describe('Service: beerGifs', function () {

  // load the service's module
  beforeEach(module('movieBrewApp'));

  // instantiate service
  var beerGifs;
  beforeEach(inject(function (_beerGifs_) {
    beerGifs = _beerGifs_;
  }));

  it('should do something', function () {
    expect(!!beerGifs).toBe(true);
  });

});
