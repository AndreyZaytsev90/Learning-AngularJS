const app = angular.module("sample", [])

app.controller('emp', function ($scope) {
    this.name = "Andrey"
    $scope.age = 33
})