const app_04 = angular.module('sample_04', [])
/*.run(
    ["$rootScope", function ($rootScope) {
        $rootScope.coefficient = 2.5
    }]
)*/

app_04.controller("personInfo", ["$scope", "$rootScope", function ($scope, $rootScope) {
    $scope.firstName = "Andrey"
    $scope.lastName = "Zaytsev"
    $scope.profession = "Front-end developer"
    $rootScope.coefficient = 2.5
}])

app_04.controller("Details", function ($scope) {
    $scope.salary = 1000

})
app_04.controller("DesiredSalary", ["$scope", "$rootScope", function ($scope, $rootScope) {
    $scope.desiredSalary = function () {
        return $scope.salary * $rootScope.coefficient
    }
}])