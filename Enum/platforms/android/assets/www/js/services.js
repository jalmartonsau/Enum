angular.module('starter.services', []);

var Server = {
    host: "http://tonsau.eu:45032",
    socket: null,
    init: function () {

        // Connect to server
        this.socket = io.connect(Server.host);
    },
    error: function (ex) {
        try {
            var data = {
                message: ex.message,
                name: ex.name,
                stack: ex.stack
            }
            this.socket.emit("LogErrorRequest", data);
        } catch (ex) {
            console.log(ex);
        }
        
    }
};

