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

    var getFunction = (function(_url){
      return $http.get(_url).then(function(_result){
        if(typeof _result.data === 'object'){
          return _result.data;
        }else {
          return $q.reject(_result.data);
        }
      }, function(_result){
        return $q.reject(_result.data);
      });
    })();

    /* Get states */
    states.get = function(){
      getFunction(statesConstant.getStatesUrl);
    };

    return states;
  });
