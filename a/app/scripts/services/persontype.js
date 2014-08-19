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
    personType.getAll = function(){
      getFunction(personConstant.getAllPersonType);
    };

    /* Get states */
    personType.get = function(_idPerson){
      getFunction(personConstant.getPersonType(_idPerson));
    };

    return personType;
  });
