var app = angular.module("MyApp",["ngRoute","ngAnimate"]);

var mainCtl = app.controller("mainCtl",function($scope,$timeout){
  $scope.message = "Hello World";
  $timeout(function(){
      $scope.initialLoad = true;
  } , 0);
});
