const app = angular.module("app-form", [])

app.controller('TextAreaWithLimitCtrl', function ($scope) {
    $scope.remaining = function () {
        return MAX_LEN - $scope.message.length
    }
    $scope.shouldWarn = function () {
        return $scope.remaining() < WARN_THRESHOLD;
    };
})