'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:CandidateCtrl
 * @description
 * # CandidateCtrl
 * Controller of the frontApp
 */
angular.module('frontApp')
  .controller('CandidateCtrl', function ($scope, $timeout, candidate) {

    var goTo = function (){
        jQuery('html, body').animate({
            scrollTop: $('.candidate-detail').offset().top
        }, 1000);
    };

    /* Get all Presidents */
    candidate.getAllPresidents().then(function(_result){
        $scope.presidents = _result;
        $timeout(function(){
            var elements = document.getElementsByClassName('block');
            var colors = chroma.scale('Set1').domain([0,1], elements.length).colors();


            for(var i = 0; i < elements.length; i++){
                elements[i].style.backgroundColor = colors[i];
            }
        },100);
    }, function(_result){
        console.log(_result);
    });

    /* Get all Positions */
    candidate.getAllPositions().then(function(_result){
        $scope.positions = _result;
    }, function(_result){
        console.log(_result);
    });

    /* Show Presidents */
    $scope.showPresidents = function(){
        jQuery('.loading').fadeIn(500);
        delete $scope.globalStateSigle;
        candidate.getAllPresidents().then(function(_result){
            $scope.positionByState = {};
            $scope.presidents = _result;
            $timeout(function(){
                var elements = document.getElementsByClassName('block');
                var colors = chroma.scale('Set1').domain([0,1], elements.length).colors();


                for(var i = 0; i < elements.length; i++){
                    elements[i].style.backgroundColor = colors[i];
                }
                jQuery('.loading').fadeOut(500);
            },100);
        }, function(_result){
            console.log(_result);
        });
    };

    /* Get position by state */
    $scope.getPositionByState = function(_positionId){
        jQuery('.loading').fadeIn(500);
        delete $scope.globalStateSigle;
        $scope.globalJobId = _positionId;
        candidate.getPositionByState(_positionId).then(function(_result){

            jQuery('.presidentes-block').fadeOut(200);
            $scope.presidents = {};
            _result.array.splice(0,1);
            $scope.positionByState = _result.array;

            $timeout(function(){
                var elements = document.getElementsByClassName('block');
                var colors = chroma.scale('Set1').domain([0,1], elements.length).colors();


                for(var i = 0; i < elements.length; i++){
                    elements[i].style.backgroundColor = colors[i];
                }
                jQuery('.loading').fadeOut(500);
            },100);
        }, function(_result){
            console.log(_result);
        });
    };

    /* Get candidate by state and job */
    $scope.getPositionByStateAndJob = function(_stateSigle){
        $scope.globalStateSigle = _stateSigle;
        jQuery('.loading').fadeIn(500);
        candidate.getPositionByStateAndJob(_stateSigle, $scope.globalJobId).then(function(_result){
            $scope.positionByState = {};
            $scope.presidents = _result;
            $timeout(function(){
                var elements = document.getElementsByClassName('block');
                var colors = chroma.scale('Set1').domain([0,1], elements.length).colors();


                for(var i = 0; i < elements.length; i++){
                    elements[i].style.backgroundColor = colors[i];
                }
                jQuery('.loading').fadeOut(500);
            },100);
        }, function(_result){
            console.log(_result);
        });
    };

    /* Get candidate detail */
    $scope.candidateDetail = function(_candidateId, _candidateName){
        $scope.nameDetail = _candidateName;
        jQuery('.loading').fadeIn(500);
        candidate.getCandidateDetail(_candidateId).then(function(_result){

            var promise = $('.candidate-detail').fadeIn(500);

            $.when(promise).then(function(){
                jQuery('#candidateChart').highcharts({
                    chart: {
                        type: 'column'
                    },
                    title:{
                        text: 'Detalhes do candidato'
                    },
                    xAxis: {
                        categories: _result.chart.legends
                    },
                    yAxis: {
                        min: 0,
                    },
                    tooltip: {
                        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                        footerFormat: '</table>',
                        shared: true,
                        useHTML: true
                    },
                    plotOptions: {
                        column: {
                            pointPadding: 0.2,
                            borderWidth: 0
                        }
                    },
                    series: _result.chart.serie
                });
                goTo();
                jQuery('.loading').fadeOut(500);
            });

        }, function(_result){
            console.log(_result);
        });
    };

  });
