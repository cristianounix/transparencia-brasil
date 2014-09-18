'use strict';

describe('Controller: CandidateCtrl', function () {

  // load the controller's module
  beforeEach(module('frontApp'));

  var CandidateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CandidateCtrl = $controller('CandidateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
