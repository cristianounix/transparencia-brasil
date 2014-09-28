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
            },100);
        }, function(_result){
            console.log(_result);
        });
    };

    /* Get position by state */
    $scope.getPositionByState = function(_positionId){
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
            },100);
        }, function(_result){
            console.log(_result);
        });
    };

    $scope.getPositionByStateAndJob = function(_stateSigle){
        $scope.globalStateSigle = _stateSigle;
        candidate.getPositionByStateAndJob(_stateSigle, $scope.globalJobId).then(function(_result){
            $scope.positionByState = {};
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
    };

    jQuery('#candidateChart').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Monthly Average Rainfall'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
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
        series: [{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }, {
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

        }]
    });
  });
