angular.module('starter.controllers', [])

.controller('LoadingCtrl', function ($scope, $state) {
    setInterval(function () {
        NextLoadingItem();
    }, 3000);

    Server.init();


    Server.socket.on('AuthUserResponse', function (data) {
        try {
            if (data.success) {
                // Populate user data
                // Navigate to home

            } else {
                PopUp(data.code, "OK");
            }
        } catch (ex) {
            Server.error(ex);
        }

    });

    var data = localStorage.getItem("user");
    if (data == null) {
        setTimeout(function () {
            $state.go('signin');
        }, 1000);
    } else {
        setTimeout(function () {
            var user = JSON.parse(data);
            User.username = user.username;
            User.password = user.password;
            Server.socket.emit("AuthUserRequest", User);
        }, 1000);
    }

    
    
})

.controller('SigninCtrl', function ($scope, $state) {
    $scope.data = {};

    Server.socket.on('AuthUserResponse', function (data) {
        try {
            if (data.success) {
                localStorage.setItem('user', JSON.stringify(
                    {
                        username: User.username,
                        password: User.password
                    })
                );
                // Populate User data
                // Navigate to home
                
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