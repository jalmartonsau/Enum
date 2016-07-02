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
        //$state.go('loading');
        // Handle the response
        // IF good, navigate to Home page and save user in memory
        // Else, display message
        console.log(data);
    });

    Server.socket.on('CreateUserResponse', function (data) {
        //$state.go('loading');
        // Handle the response
        // IF good, navigate to Home page and save user in memory
        // Else, display message
        console.log(data);
    });

    $scope.SignIn = function () {
        try {
            User.username = $scope.data.username;
            User.password = $scope.data.password;
            if (User.username == null || User.username == "")
                throw "Username is empty"
            if (User.password == null || User.password == "")
                throw "Password is empty";

            Server.socket.emit("AuthUserRequest", User);
        } catch (ex) {
            // Display error message.
            console.log(ex);
        }
    }

    $scope.SignUp = function () {
        try{
            User.username = $scope.data.username;
            User.password = $scope.data.password;
            if (User.username == null || User.username == "")
                throw "Username is empty"
            if (User.password == null || User.password == "")
                throw "Password is empty";

            Server.socket.emit("CreateUserRequest", User);
        }catch(ex){
            console.log(ex);
        }
    }

})