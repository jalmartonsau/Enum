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

    Server.socket.on('AuthUserResponse', function (data) {
        $state.go('loading');
        // Handle the response
        // IF good, navigate to Home page and save user in memory
        // Else, display message
        console.log(data);
    });

    $scope.SignIn = function () {
        User.username = $scope.data.username;
        User.password = $scope.data.password;

        // Call SignIn service
        try {
            if (User == null)
                throw new Exception("Data is missing");
            if (User.username == null)
                throw new Exception("Username is empty");
            if (User.password == null)
                throw new Exception("Password is empty");
            if (User.device == null)
                throw new Exception("Data.Device is missing");
            if (User.device.id == null)
                throw new Exception("Data.Device.id is missing");

            Server.socket.emit("AuthUserRequest", User);
        } catch (ex) {
            console.log(ex);
        }
        
    }

})