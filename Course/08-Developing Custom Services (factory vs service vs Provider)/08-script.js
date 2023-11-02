const app_08 = angular.module('app-08', [])

app_08.controller("emp_08", ["$scope","calcFactory", function ($scope, calcFactory){
    $scope.a = 3
    $scope.b = 3
    
     
    $scope.doSum = function () {
        //синхронный код $scope.sum = calcFactory.getSum($scope.a, $scope.b)
        calcFactory.getSum($scope.a, $scope.b, function (result) {
            $scope.sum = result
        })
    }
    
    $scope.handleKeyPress = function(event) {
        if (event.keyCode === 13) {
            $scope.doSum();
        }
    };
}])


app_08.factory("calcFactory", ["$http", "$log", "$http", function ($scope, $log, $http) {
    $log.log("instantiating calcFactory...")
    let oCalcService = {}
    
    //синхронный код
    /* oCalcService.getSum = function (a,b) {
         return parseInt(a)+ parseInt(b)
     }*/

    oCalcService.getSum = function (a,b,callback) {
        const s = parseInt(a)+ parseInt(b)
        callback(s)
    }

    /*oCalcService.getSum = function (a, b, callback) {
        $http({
            url: "http://localhost:4467/Sum?a=" + a + "&b=" + b,
            method: "GET"
        }).then(function (resp) {
            $log.log(resp.data)
            callback(resp.data)
            /!*$scope.sum = resp.data*!/
        }, function (resp) {
            $log.error("ERROR")
        })
    }*/

    return oCalcService

}])


