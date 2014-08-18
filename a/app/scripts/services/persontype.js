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

    /* Get states */
    personType.getAll = function(){
      return $http.get(personConstant.getAllPersonType).then(function(_result){
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
    personType.get = function(_idPerson){
      return $http.get(personConstant.getPersonType(_idPerson)).then(function(_result){
        if(typeof _result.data === 'object'){
          return _result.data;
        }else {
          return $q.reject(_result.data);
        }
      }, function(_result){
        return $q.reject(_result.data);
      });
    };

    return personType;
  });
