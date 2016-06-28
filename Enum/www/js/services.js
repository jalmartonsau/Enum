angular.module('starter.services', []);

var Server = {
    host: "http://tonsau.eu:45032",
    socket: null,
    init: function () {

        // Connect to server
        this.socket = io.connect(Server.host);

        // Listen for events
        

    }
};

