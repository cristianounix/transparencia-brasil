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
    'getAllPresidents': '../../json/presidentes.json',

    /*
      TODO
        - Implementar constant para buscar detalhes de um candidato
        - Implementar constant para buscar candidatos de um cargo por estado
    */

  });
