angular.module('starter.controllers', [])

.controller('LoadingCtrl', function ($scope, $state) {
    // Loading
    setInterval(function () {
        NextLoadingItem();
    }, 3000);

    // Initialize server 
    Server.init();

    // Load user from the memory
    var data = localStorage.getItem("user");
    if (data == null) {
        setTimeout(function () {
            $state.go('signin');
        }, 1000);
    } else {
        // Sync data with server and go to home/main
    }

    
    
})

.controller('SigninCtrl', function ($scope, $state) {
    $scope.data = {};

    $scope.SignIn = function () {
        User.username = $scope.data.username;
        User.password = $scope.data.password;

        // Call SignIn service
    }

})