(function () {
  'use strict';

  angular
    .module('promisesAng')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
