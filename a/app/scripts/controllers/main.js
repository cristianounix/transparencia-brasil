'use strict';

/**
 * @ngdoc function
 * @name transparenciaBrasilApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the transparenciaBrasilApp
 */
angular.module('transparenciaBrasilApp')
  .controller('MainCtrl', function ($scope, states, personType) {

    /* Final Search query elements */
    /*
        TODO
         - Definir id padrão para SP
    */
    $scope.stateDefaultName = 'São Paulo - SP';
    $scope.stateQueryId = 1;

    $scope.configFinalQuery = function(_stateId, _newCityName, _stateName, _personName){
        $scope.stateDefaultName = _newCityName + ' - ' +_stateName;
        $scope.stateQueryId = _stateId;
        $scope.personName = _personName;
    };

    /* Get states */
    states.get().then(function(_result){
        $scope.states = _result.states;
    }, function(_result){
        console.log(_result);
    });

    /* Get all Person Type*/
    $scope.getAllPersonType = function(){
        personType.getAll().then(function(_result){
            $scope.persons = _result.person;
        }, function(_result){
            console.log(_result);
        });
    };

    /* Function to get person type */
    $scope.getPersonType = function(_idPerson){
        personType.get(_idPerson).then(function(_result){
            console.log(_result);
        }, function(_result){
            console.log(_result);
        });
    };

  });
