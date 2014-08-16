'use strict';

/**
 * @ngdoc function
 * @name aApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the aApp
 */
angular.module('aApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
