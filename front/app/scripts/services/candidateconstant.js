'use strict';

/**
 * @ngdoc service
 * @name frontApp.candidateConstant
 * @description
 * # candidateConstant
 * Constant in the frontApp.
 */
angular.module('frontApp')
  .constant('candidateConstant', {

  /* Get all presidents */
  'getAllPresidents': '/presidentes.json',

  /* Get all positions */
  'getAllPositions': '/cargos.json',

  /* Get position by state */
  'getPositionByState': function(_positionId){
     return '/estados.json?cargo='+_positionId+'';
  },

  /* Get position by state and party */
  'getPositionByStateAndJob': function (_stateSigle, _jobId){
    return '/candidatos.json?estado=BA&cargo=1';
  }
});
