(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name module.factory:Cake
   *
   * @description
   *
   */
  angular
      .module('home')
      .factory('getPets', getPets);

    getPets.$inject = ['$http', '$q'];

  function getPets($http, $q){
      var petArr=[];
      var pets = {};
      pets.getPetsByOwner = function (owner){
      var deferred = $q.defer();
      $http.get('https://localhost/promisesBack/getPetsByOwnerName.php?owner='+owner)
        .success(function(data){
          console.log(data);
          deferred.resolve(data);
        });
        return deferred.promise;
    };
    return pets;
  }
    
}());
