'use strict';

/**
 * @ngdoc function
 * @name aApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aApp
 */
angular.module('aApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
