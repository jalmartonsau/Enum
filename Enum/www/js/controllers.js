angular.module('starter.controllers', [])

.controller('LoadingCtrl', function ($scope, $state) {
    // Check the internet connection
    if (window.Connection) {
        if (navigator.connection.type == Connection.NONE) {
            // No interner :(
        } else {
            Enum.internet = true;
        }
    }

    if (Enum.internet) {
        // Connect socket.io
    }

    // Load user from the memory
    

})
