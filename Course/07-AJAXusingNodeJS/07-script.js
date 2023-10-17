const app_071 = angular.module("app_07", [])


app_071.controller("emp_071", ["$scope", "$http", "$log", function ($scope, $http, $log) {
    $scope.a = 3
    $scope.b = 7

    $scope.doSum = function () {
        /*$scope.sum = parseInt($scope.a) + parseInt($scope.b)*/
        $http({
            url: "http://localhost:4467/Sum?a=" + $scope.a + "&b=" + $scope.b,
            method: "GET"
        }).then(function (resp) {
            /*debugger*/
            $log.log(resp.data)
            $scope.sum = resp.data
        }, function (resp) {
            /*alert("ERROR occurred")*/
            $log.error("ERROR occurred")
        })
    }
}])