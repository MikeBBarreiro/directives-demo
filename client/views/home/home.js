(function(){
  'use strict';

  angular.module('directives-demo')
  .controller('HomeCtrl', ['$scope', '$interval', 'Home', function($scope, $interval, Home){
    $scope.people = [{name:'Bob', age:25}, {name:'Sally', age:22}];
    $scope.symbols = ['AAPL', 'GOOG', 'MSFT', 'AMZN'];
    $scope.titles = [];

    $scope.delMovie = function(index){
      $scope.titles.splice(index, 1);
    };

    $scope.addMovie = function(){
      $scope.titles.push($scope.title);
      $scope.title = null;
    };

  }]);
})();

