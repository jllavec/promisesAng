(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:HomeCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl);
  
  HomeCtrl.$inject = ['$http', '$q', 'getPets'];
  
  function HomeCtrl($http, $q, getPets) {
    var vm = this;
    vm.ctrlName = 'HomeCtrl';
    vm.json = getPets.getPetsByOwner("Juanjo");
  }
}());
