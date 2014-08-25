'use strict';

describe('Controller: AboutCtrl', function () {

  it('should attach a list of awesomeThings to the scope', function () {
    browser().navigateTo('/trasparencia-brasil/a/');
    expect(browser().window().path()).toEqual('/trasparencia-brasil/a/app');
  });
});
