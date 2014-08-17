'use strict';

describe('Service: statesconstant', function () {

  // load the service's module
  beforeEach(module('aApp'));

  // instantiate service
  var statesconstant;
  beforeEach(inject(function (_statesconstant_) {
    statesconstant = _statesconstant_;
  }));

  it('should do something', function () {
    expect(!!statesconstant).toBe(true);
  });

});
