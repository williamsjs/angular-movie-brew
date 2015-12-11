'use strict';

describe('Service: beers', function () {

  // load the service's module
  beforeEach(module('movieBrewApp'));

  // instantiate service
  var beers;
  beforeEach(inject(function (_beers_) {
    beers = _beers_;
  }));

  it('should do something', function () {
    expect(!!beers).toBe(true);
  });

});
