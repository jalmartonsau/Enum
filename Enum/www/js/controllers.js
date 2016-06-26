angular.module('starter.controllers', [])

.controller('LoadingCtrl', function ($scope, $state) {

    // Connect socket.io
    NextLoadingItem();
    Enum.socket = io.connect(Enum.host);

    // Load user from the memory
    
    
})

function NextLoadingItem() {
    var items = $('.loading-feed').find('.loading-item');
    items.first().slideUp(500, function () {
        var newItem = $(this);
        newItem.css("display", "block");
        $(this).remove();
        $('.loading-feed').append(newItem);
    });
}