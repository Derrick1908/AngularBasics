/// <reference path="../angular.js" />
var app = angular.module("myApp", []);

app.controller("RedController", function ($scope, $rootScope) {
    $scope.favColor = "Red";
    $rootScope.color = "White";

    console.log($rootScope);        ///For debugging purposes only
})

app.controller("BlueController", function ($scope) {
    $scope.favColor = "Blue";
})