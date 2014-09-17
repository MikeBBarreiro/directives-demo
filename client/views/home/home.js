(function(){
  'use strict';

  angular.module('directives-demo')
  .controller('HomeCtrl', ['$scope', '$interval', 'Home', function($scope, $interval, Home){
    $scope.people = [{name:'Bob', age:25}, {name:'Sally', age:22}];
    $scope.symbols = ['AAPL', 'GOOG', 'MSFT', 'AMZN'];
  }]);
})();

