angular.module('starter.controllers', [])

.controller('LoadingCtrl', function ($scope, $state) {
    // Loading
    setInterval(function () {
        NextLoadingItem();
    }, 3000);

    Server.init();

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
        try {
            if (data.success) {
                // Save user in memory
                // Navigate to home
                PopUp(data.code, "OK");
            } else {
                PopUp(data.code, "OK");
            }
        } catch (ex) {
            Server.error(ex);
        }
        
    });

    Server.socket.on('CreateUserResponse', function (data) {
        if (data.success) {
            Server.socket.emit("AuthUserRequest", User);
        } else {
            PopUp(data.code, "OK");
        }
    });

    $scope.SignIn = function () {
        try {
            User.username = $scope.data.username;
            User.password = $scope.data.password;
            if (User.username == null || User.username == "")
                throw 8
            if (User.password == null || User.password == "")
                throw 9;

            Server.socket.emit("AuthUserRequest", User);
        } catch (ex) {
            PopUp(ex, "OK");
        }
    }

    $scope.SignUp = function () {
        try{
            User.username = $scope.data.username;
            User.password = $scope.data.password;
            if (User.username == null || User.username == "")
                throw 8;
            if (User.password == null || User.password == "")
                throw 9;

            Server.socket.emit("CreateUserRequest", User);
        } catch (ex) {
            PopUp(ex, "OK");
        }
    }

})