angular.module('starter.controllers', [])

.controller('LoadingCtrl', function ($scope, $state) {

    // Connect socket.io
    Enum.socket = io.connect(Enum.host);

    // Load user from the memory
    var data = localStorage.getItem("user");
    
    setInterval(function () {
        NextLoadingItem();
    }, 3000);
})

