/// <reference path="../angular.js" />

angular.module("myApp", [])
       .controller("CountryController", function ($scope) {
                $scope.country = {
                    name: "India",
                    capital: "New Delhi",
                    flag: "../Images/India.png"
                };
       });