angular.module('starter.controllers', [])

.controller('LoadingCtrl', function ($scope, $state) {

    // Check the internet connection
    if (window.Connection) {
        if (navigator.connection.type == Connection.NONE) {
            // No internet :(
            Enum.internet = false;
        } else {
            Enum.internet = true;
        }
    }

    if (Enum.internet) {
        // Connect socket.io
        if (Enum.socket == null)
            Enum.socket = io.connect(Enum.host);

        if (Enum.socket == null)
            return; // failed

    }

    // Load user from the memory
    

})
