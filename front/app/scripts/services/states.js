'use strict';

/**
 * @ngdoc service
 * @name transparenciaBrasilApp.states
 * @description
 * # states
 * Factory in the transparenciaBrasilApp.
 */
angular.module('transparenciaBrasilApp')
  .factory('states', function (statesConstant, $http, $q) {

    var states = {};

    /* Global Function to get */
    var getFunc = function(_url){
      return $http.get(_url).then(function(_result){
        if(typeof _result.data === 'object'){
          return _result.data;
        }else {
          return $q.reject(_result.data);
        }
      }, function(_result){
        return $q.reject(_result.data);
      });
    };

    /* Get states */
    states.get = function(){
      return getFunc(statesConstant.getStatesUrl);
    };

    return states;
  });
