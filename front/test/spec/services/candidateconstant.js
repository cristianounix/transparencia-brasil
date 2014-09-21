'use strict';

describe('Service: candidateConstant', function () {

  // load the service's module
  beforeEach(module('frontApp'));

  // instantiate service
  var candidateConstant;
  beforeEach(inject(function (_candidateConstant_) {
    candidateConstant = _candidateConstant_;
  }));

  it('should do something', function () {
    expect(!!candidateConstant).toBe(true);
  });

});
