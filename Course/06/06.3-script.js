const app_063 = angular.module('app', [])

app_063.controller("emp_06", ["$scope", function ($scope) {
    $scope.a = 3
    $scope.b = 7

    $scope.doSum = function () {
        $scope.sum = parseInt($scope.a) + parseInt($scope.b)
    }
}])