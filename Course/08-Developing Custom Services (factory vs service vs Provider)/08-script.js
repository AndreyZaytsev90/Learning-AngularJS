const app_08 = angular.module('app', [])

<<<<<<< HEAD
app_08.controller("emp_08", ["$scope", "calcFactory", function ($scope, calcFactory) {

    $scope.handleKeyPress = function(event) {
        if (event.keyCode === 13) {
            $scope.doSum()
        }
    };
    
    $scope.a = 3
    $scope.b = 3

    $scope.doSum = function () {
        // $scope.sum = calcFactory.getSum($scope.a, $scope.b )
        calcFactory.getSum($scope.a, $scope.b, function (params) {
            $scope.sum = params
        })
    }
}])

app_08.factory("calcFactory", ["$http", "$log", "$http", function ($scope, $log, $http) {
    $log.log("instantiating calcFactory...")
    let oCalcService = {}

    /* oCalcService.getSum = function (a,b) {
         return parseInt(a)+ parseInt(b)
     }*/

    /*oCalcService.getSum = function (a,b,callback) {
        const s = parseInt(a)+ parseInt(b)
        callback(s)
    }*/

    oCalcService.getSum = function (a, b, callback) {
        $http({
            url: "http://localhost:4467/Sum?a=" + a + "&b=" + b,
            method: "GET"
        }).then(function (resp) {
            $log.log(resp.data)
            callback(resp.data)
        }, function (resp) {
            $log.error("ERROR")
        })
    }

    return oCalcService

}])

=======
app_08.controller("emp_08", ["$scope", function ($scope) {
    $scope.a = 3
    $scope.b = 7

    $scope.doDoubleAndSum = function () {

        $scope.a = $scope.a * 2
        $scope.b = $scope.b * 2
        $scope.sum = parseInt($scope.a) + parseInt($scope.b)

    }
}])
>>>>>>> origin/main
