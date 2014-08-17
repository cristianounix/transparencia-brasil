'use strict';

/**
 * @ngdoc function
 * @name transparenciaBrasilApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the transparenciaBrasilApp
 */
angular.module('transparenciaBrasilApp')
  .controller('MainCtrl', function ($scope, states) {

    /* Get states */
    states.get().then(function(_result){
        $scope.states = _result.states;
    }, function(_result){
        console.log(_result);
    });

  });
