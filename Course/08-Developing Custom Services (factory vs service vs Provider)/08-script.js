const app_08 = angular.module('app', [])

app_08.controller("emp_08", ["$scope", function ($scope) {
    $scope.a = 3
    $scope.b = 7

    $scope.doDoubleAndSum = function () {

        $scope.a = $scope.a * 2
        $scope.b = $scope.b * 2
        $scope.sum = parseInt($scope.a) + parseInt($scope.b)

    }
}])