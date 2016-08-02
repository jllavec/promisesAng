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
  
  HomeCtrl.$inject = ['getPets'];
  
  function HomeCtrl(getPets) {
    var vm = this;
    vm.ctrlName = 'HomeCtrl';
    vm.owner="Pedro";
    vm.filter="";
    vm.select="Dog";
    vm.allPets = function(){
      vm.json = [{petName:"Kira",speciesName:"Dog"},{petName:"Chavalin",speciesName:"Dog"},{petName:"Chavalin",speciesName:"Cat"},{petName:"Zeus",speciesName:"Dog"}];
    };
    vm.getPetsByOwner=function(){
      getPets.getPetsByOwner(vm.owner).then(function(pets){
        vm.json = pets;
      });
    };
  }
}());
