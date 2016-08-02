(function () {
  'use strict';

 
  angular
    .module('home')
    .filter('doubleFilter', function () {
      return function (arr, value, field) {
        var filtered = [];
        console.log(value);
        if(value==="")
          return arr;
        else{
          arr.forEach(function (e){
            if(e[field].substring(0,value.length)===value)
              filtered.push(e);
          });
          return filtered;
        }
      };
    });

}());
