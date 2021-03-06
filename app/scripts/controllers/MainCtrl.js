//
// The outer root controller for capturing all events,databindings for other child controller.
// ------------------------------------------------------------------------------------------
app.controller("MainCtrl", ["$scope", "$log",
    function($scope, $log) {

        $scope.pageTitle = "";

        // provider api for all child page, set individuation document title.
        $scope.setPageTitle = function(newTitle) {
            $scope.pageTitle = newTitle;
        };

        $scope.$watch("pageTitle", function(newVal, oldVal) {
            if (newVal) {
                document.title = newVal;
            }
        });
    }
]);
