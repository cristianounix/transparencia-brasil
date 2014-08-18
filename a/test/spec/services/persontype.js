'use strict';

describe('Service: personType', function () {

  // load the service's module
  beforeEach(module('transparenciaBrasilAppApp'));

  // instantiate service
  var personType;
  beforeEach(inject(function (_personType_) {
    personType = _personType_;
  }));

  it('should do something', function () {
    expect(!!personType).toBe(true);
  });

});
