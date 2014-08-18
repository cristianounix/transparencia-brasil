'use strict';

describe('Service: personConstant', function () {

  // load the service's module
  beforeEach(module('transparenciaBrasilAppApp'));

  // instantiate service
  var personConstant;
  beforeEach(inject(function (_personConstant_) {
    personConstant = _personConstant_;
  }));

  it('should do something', function () {
    expect(!!personConstant).toBe(true);
  });

});
