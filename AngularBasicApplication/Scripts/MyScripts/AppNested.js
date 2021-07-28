/// <reference path="../angular.js" />
var app = angular.module("myApp", [])

app.controller("CountryController", function ($scope) {
    $scope.name = "India";
    $scope.iso = "INR";

    console.log($scope);        /// For Debugging Purposes only
})

app.controller("StateController", function ($scope) {

    $scope.name = "Goa";
    console.log($scope);        /// For Debugging Purposes only
})

app.controller("CityController", function ($scope) {

    $scope.name = "Panjim";

    console.log($scope);        /// For Debugging Purposes only
})