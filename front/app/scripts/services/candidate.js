'use strict';

/**
 * @ngdoc service
 * @name frontApp.candidate
 * @description
 * # candidate
 * Factory in the frontApp.
 */
angular.module('frontApp')
  .factory('candidate', function ($http, $q, candidateConstant) {

    /* Global Object to school */
    var candidateFactory = {};

    /* Global get function */
    var globalGet = function(_url){
      return $http.get(_url).then(function(_result){
        if(typeof _result.data === 'object'){
          return _result.data;
        }else{
          $q.reject(_result.data);
        }
      }, function(_result){
        $q.reject(_result.data);
      });
    };

    /* Global get function */
    var globalPost = function(_url, _data){
      return $http.post(_url, _data).then(function(_result){
        if(typeof _result.data === 'object'){
          return _result.data;
        }else{
          $q.reject(_result.data);
        }
      }, function(_result){
        $q.reject(_result.data);
      });
    };

    /* Post registraion information */
    candidateFactory.sendRegistration = function(_data){
      return globalPost(candidateConstant.sendRegistration, _data);
    };

    /* Get schools to new registration */
    candidateFactory.getAllPresidents = function(){
      return globalGet(candidateConstant.getAllPresidents);
    };

    /* Get schools to new registration */
    candidateFactory.getAllPositions = function(){
      return globalGet(candidateConstant.getAllPositions);
    };

    /* Get position by state */
    candidateFactory.getPositionByState = function(_positionId){
      return globalGet(candidateConstant.getPositionByState(_positionId));
    };

    /* Get position by state and party */
    candidateFactory.getPositionByStateAndJob = function(_stateSigle, _jobId){
      return globalGet(candidateConstant.getPositionByStateAndJob(_stateSigle, _jobId));
    };

    return candidateFactory;

  });
