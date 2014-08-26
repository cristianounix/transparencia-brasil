'use strict';

/**
 * @ngdoc service
 * @name transparenciaBrasilAppApp.personType
 * @description
 * # personType
 * Factory in the transparenciaBrasilAppApp.
 */
angular.module('transparenciaBrasilApp')
  .factory('personType', function ($http, $q, personConstant) {

    var personType = {};

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
    personType.getAll = function(){
      return getFunc(personConstant.getAllPersonType);
    };

    /* Get states */
    personType.get = function(_idPerson){
      return getFunc(personConstant.getPersonType(_idPerson));
    };

    return personType;
  });
