const app = angular.module("app", [])

app.controller("ctrl", function ($scope) {

})

app.directive("direct", function () {
    return {
        templateUrl: "card.html",
        link: function (scope, element, attrs) {
            console.log('direct')
        }
    }
})
