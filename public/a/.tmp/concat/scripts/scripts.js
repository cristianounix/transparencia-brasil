'use strict';
/**
 * Animations used in transparenciaBrasilApp
 */
(function () {
  /* Focus on search */
  jQuery(document).on('focus', '#searchHeader', function () {
    jQuery(this).attr('value', '');
  });
  jQuery(document).on('focusout', '#searchHeader', function () {
    jQuery(this).attr('value', 'Localizar candidato...');
  });
  /* Show select box in home */
  jQuery(document).on('click', '.span-select', function (e) {
    e.stopPropagation();
    jQuery(e.target).parent().find('.box-trans-hidden-select').slideToggle(50);
  });
  jQuery(document).on('click', 'body', function () {
    jQuery('.box-trans-hidden-select').hide(50);
  });
  /* Go next step */
  var iteration = true;
  var value = 0;
  jQuery(document).on('click', '.ion-arrow-right-c, .li-select-state, .li-select-person', function () {
    var promise = jQuery(this).parent().closest('.default-trans-container').next('.default-sections-hidden').fadeIn(100);
    var element = jQuery(this).parent().closest('.default-trans-container').next('.default-sections-hidden');
    if (iteration) {
      value = document.body.clientHeight * 2;
      iteration = false;
    }
    jQuery.when(promise).then(function () {
      jQuery('body').css({ 'height': value });
      jQuery('html, body').animate({ scrollTop: parseInt(jQuery(element).offset().top) }, 500);
    });
  });
}(jQuery));
'use strict';
/**
 * @ngdoc overview
 * @name transparenciaBrasilApp
 * @description
 * # transparenciaBrasilApp
 *
 * Main module of the application.
 */
angular.module('transparenciaBrasilApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
]).config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    }).when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    }).otherwise({ redirectTo: '/' });
  }
]);
'use strict';
/**
 * @ngdoc service
 * @name transparenciaBrasilApp.statesconstant
 * @description
 * # statesconstant
 * Constant in the transparenciaBrasilApp.
 */
angular.module('transparenciaBrasilApp').constant('statesConstant', { 'getStatesUrl': 'estados.json' });
'use strict';
/**
 * @ngdoc service
 * @name transparenciaBrasilApp.states
 * @description
 * # states
 * Factory in the transparenciaBrasilApp.
 */
angular.module('transparenciaBrasilApp').factory('states', [
  'statesConstant',
  '$http',
  '$q',
  function (statesConstant, $http, $q) {
    var states = {};
    /* Global Function to get */
    var getFunc = function (_url) {
      return $http.get(_url).then(function (_result) {
        if (typeof _result.data === 'object') {
          return _result.data;
        } else {
          return $q.reject(_result.data);
        }
      }, function (_result) {
        return $q.reject(_result.data);
      });
    };
    /* Get states */
    states.get = function () {
      return getFunc(statesConstant.getStatesUrl);
    };
    return states;
  }
]);
'use strict';
/**
 * @ngdoc service
 * @name transparenciaBrasilAppApp.personType
 * @description
 * # personType
 * Factory in the transparenciaBrasilAppApp.
 */
angular.module('transparenciaBrasilApp').factory('personType', [
  '$http',
  '$q',
  'personConstant',
  function ($http, $q, personConstant) {
    var personType = {};
    /* Global Function to get */
    var getFunc = function (_url) {
      return $http.get(_url).then(function (_result) {
        if (typeof _result.data === 'object') {
          return _result.data;
        } else {
          return $q.reject(_result.data);
        }
      }, function (_result) {
        return $q.reject(_result.data);
      });
    };
    /* Get states */
    personType.getAll = function () {
      return getFunc(personConstant.getAllPersonType);
    };
    /* Get states */
    personType.get = function (_idPerson) {
      return getFunc(personConstant.getPersonType(_idPerson));
    };
    return personType;
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name transparenciaBrasilApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the transparenciaBrasilApp
 */
angular.module('transparenciaBrasilApp').controller('MainCtrl', [
  '$scope',
  'states',
  'personType',
  '$timeout',
  function ($scope, states, personType, $timeout) {
    /* Final Search query elements */
    /*
        TODO
         - Definir id padrão para SP
    */
    $scope.stateDefaultName = 'S\xe3o Paulo - SP';
    $scope.stateQueryId = 1;
    $scope.configFinalQuery = function (_stateId, _stateName, _stateAcronym, _personId, _personName) {
      $scope.stateName = _stateName;
      $scope.stateAcronym = _stateAcronym;
      $scope.stateDefaultName = _stateName + ' - ' + _stateAcronym;
      $scope.stateId = _stateId;
      $scope.firstPerson = _personId;
      $scope.firstPersonName = _personName;
    };
    /* Get states */
    states.get().then(function (_result) {
      $scope.states = _result.states;
    }, function (_result) {
      console.log(_result);
    });
    /* Get all Person Type*/
    $scope.getAllPersonType = function () {
      personType.getAll().then(function (_result) {
        $scope.persons = _result.person;
        /* Default Person id and name */
        $scope.firstPerson = _result.person[0].id;
        $scope.firstPersonName = _result.person[0].name;
      }, function (_result) {
        console.log(_result);
      });
    };
    /* Function to get person type */
    $scope.getPersonType = function (_idPerson) {
      personType.get(_idPerson).then(function (_result) {
        console.log(_result);
      }, function (_result) {
        console.log(_result);
      });
      $timeout(function () {
        // Draw a sparkline for the #sparkline element
        jQuery('.sparkline').sparkline([
          10,
          30,
          5,
          -1,
          5,
          6,
          -4
        ], {
          type: 'bar',
          height: '60',
          barWidth: 10,
          tooltipFormat: ' {{offset:offset}} {{value}} ',
          tooltipValueLookups: {
            'offset': {
              0: 'Bens totais em 1 ano: ',
              1: 'Candidaturas ganhas: ',
              2: 'Candidaturas perdidas: ',
              3: 'Uma mensagem',
              4: 'Uma mensagem',
              5: 'Uma mensagem',
              6: 'Uma mensagem'
            }
          }
        });
      }, 500);
    };
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name transparenciaBrasilApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the transparenciaBrasilApp
 */
angular.module('transparenciaBrasilApp').controller('AboutCtrl', [
  '$scope',
  function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
]);