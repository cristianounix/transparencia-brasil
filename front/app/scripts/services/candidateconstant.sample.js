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
    //'getAllPresidents': '../../json/presidentes.json',

    /* Get all positions */
    //'getAllPositions': '../../json/cargos.json',

    /* Get position by state */
    // 'getPositionByState': function(_positionId){
    //   return '../../json/cargo-'+_positionId+'.json';
    // },

    /* Get position by state and party */
    // 'getPositionByStateAndJob': function (_stateSigle, _jobId){
    //   return '../../json/candidates-'+ _stateSigle +'-'+_jobId+'.json';
    // },

    /* Get candidate detail */
    // 'getCandidateDetail': function(_candidateId){
    //   console.log(_candidateId);
    //   return '../../json/candidate_detail.json';
    // }
  });
