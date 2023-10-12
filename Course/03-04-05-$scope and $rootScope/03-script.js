const app_03 = angular.module("sample_03", [])

app_03.controller("emp_03", function ($scope) {
    $scope.name = "Petr"
    $scope.salary = 5000
    $scope.getAnnualSalary = function () {
        return (this.salary) * 12
    }
})
/*-----------Тоже самое можно написать по другому---------------*/
/*
app_03.controller("emp_03", ["$scope", function (c) {
    c.name = "Petr"
}])*/
app_03.controller("personInfo", function ($scope) {
    $scope.name = "Andrey"
    $scope.address = {
        country: "Russia",
        city: "Moscow",
    }
})