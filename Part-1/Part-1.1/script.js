let app = angular.module('app', [])

app.controller("HelloCtrl", function ($scope) {
    console.log("HelloCtrl")
    /*$scope.name = "World"*/
    const HelloCtrl = function ($scope) {
        /*$scope.name = "World"*/
    }
    $scope.getName = function () {
        /*return $scope.name*/
    }
})

app.controller("WorldCtrl", function ($scope) {
    console.log('WorldCtrl')
    $scope.population = 8000
    $scope.countries = [
        {name: "Russia", population: 150},
        {name: "Belarus", population: 10}
    ]
    $scope.worldsPercentage = function (countryPopulation) {
        return (countryPopulation/$scope.population)*100
    }
})