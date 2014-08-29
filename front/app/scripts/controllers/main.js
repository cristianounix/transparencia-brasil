'use strict';

/**
 * @ngdoc function
 * @name transparenciaBrasilApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the transparenciaBrasilApp
 */
angular.module('transparenciaBrasilApp')
  .controller('MainCtrl', function ($scope, states, personType, $timeout) {

    var hiddenSelect = function (){
        /* Hidden select box */
        jQuery('.box-trans-hidden-select').hide(50);
    };

    /* Final Search query elements */
    $scope.configFinalQuery = function(_stateId, _stateName, _stateAcronym, _personId, _personName){

        $scope.stateName = _stateName;
        $scope.stateAcronym = _stateAcronym;
        $scope.stateDefaultName = _stateName + ' - ' + _stateAcronym;
        $scope.stateId = _stateId;

        $scope.firstPerson = _personId;
        $scope.firstPersonName = _personName;

        /* Hidden select box */
        hiddenSelect();
    };

    /* Get states */
    states.get().then(function(_result){

        $scope.states = _result.states;
        $scope.stateName = _result.states[0].name + ' - ' + _result.states[0].acronym;
        $scope.stateId = _result.states.id;

    }, function(_result){
        console.log(_result);
    });

    /* Get all Person Type*/
    personType.getAll().then(function(_result){
        $scope.persons = _result.person;

        /* Default Person id and name */
        $scope.firstPerson = _result.person[0].id;
        $scope.firstPersonName = _result.person[0].name;

        /* Hidden select box */
        hiddenSelect();

    }, function(_result){
        console.log(_result);
    });
    $scope.getAllPersonType = function(){
        personType.getAll().then(function(_result){
            $scope.persons = _result.person;

            /* Default Person id and name */
            $scope.firstPerson = _result.person[0].id;
            $scope.firstPersonName = _result.person[0].name;

            /* Hidden select box */
            hiddenSelect();

        }, function(_result){
            console.log(_result);
        });
    };

    /* Function to get person type */
    $scope.getPersonType = function(_idPerson){

        personType.get(_idPerson).then(function(_result){
            $scope.personList = _result.person;
            jQuery('.box-trans-hidden-select').hide(50);
        }, function(_result){
            console.log(_result);
        });

        $timeout(function(){

            // Draw a sparkline for the #sparkline element
            jQuery('.sparkline').sparkline([10, 30, 5, -1, 5, 6,-4], {
                type: 'bar',
                height: '60',
                barWidth: 10,
                tooltipFormat: ' {{offset:offset}} {{value}} ',
                tooltipValueLookups: {
                    'offset': {
                        0: 'Bens totais em 1 ano: ',
                        1: 'Candidaturas ganhas: ',
                        2: 'Candidaturas perdidas: ',
                        3: 'Uma mensagem',
                        4: 'Uma mensagem',
                        5: 'Uma mensagem',
                        6: 'Uma mensagem',
                    }
                },
            });
        }, 500);

    };

  });
