(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.commaSeparatedFoodItems = "";
        $scope.responseMessage = "";

        $scope.calculateNoOfFoodItems = function() {
            var string = $scope.commaSeparatedFoodItems;
            if (string.length == 0) {
                $scope.responseMessage = "Please enter data first";
            } else {
                var listOfFoodItems = string.split(',');
                var count = 0;
                for (var food in listOfFoodItems) {
                    count++;
                }
                if (count <= 3) {
                    $scope.responseMessage = "Enjoy!";
                } else if (count >= 4) {
                    $scope.responseMessage = "Too much!";
                }
            }
        }

    }

})();