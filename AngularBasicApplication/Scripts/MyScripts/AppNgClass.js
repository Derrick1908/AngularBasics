/// <reference path="../angular.js" />

var app = angular.module("NgClassApp", []);

app.controller("EmployeeController", function ($scope) {

    $scope.employees = [
        { id: 123, name: "John", salary: 5600, isPermanent: true },
        { id: 623, name: "Peter", salary: 9600, isPermanent: true },
        { id: 823, name: "Sam", salary: 7600, isPermanent: false },
        { id: 223, name: "Brown", salary: 2600, isPermanent: true },
        { id: 523, name: "Jack", salary: 4600, isPermanent: true },
        { id: 123, name: "Tom", salary: 5600, isPermanent: true },
        { id: 623, name: "Paul", salary: 9600, isPermanent: false },
        { id: 823, name: "Blaise", salary: 7600, isPermanent: false },
        { id: 223, name: "Andrew", salary: 2600, isPermanent: true },
        { id: 523, name: "Joseph", salary: 4600, isPermanent: true },
        { id: 123, name: "James", salary: 5600, isPermanent: true },
        { id: 623, name: "Patrick", salary: 9600, isPermanent: false },
        { id: 823, name: "Sandy", salary: 7600, isPermanent: false },
        { id: 223, name: "Brandon", salary: 2600, isPermanent: true },
        { id: 523, name: "Julie", salary: 4600, isPermanent: true },
        { id: 123, name: "Jenifer", salary: 5600, isPermanent: true },
        { id: 623, name: "Patsy", salary: 9600, isPermanent: false },
        { id: 823, name: "Sherin", salary: 7600, isPermanent: false },
        { id: 223, name: "Brosh", salary: 2600, isPermanent: true },
        { id: 523, name: "Tobby", salary: 4600, isPermanent: true }
    ]
})