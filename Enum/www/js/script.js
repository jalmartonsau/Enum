// Param.


var Enum = {
    internet: false,
    host: "http://tonsau.eu:45032",
    socket: null
};



// Functions
function NextLoadingItem() {
    var items = $('.loading-feed').find('.loading-item');
    items.first().slideUp(500, function () {
        $(this).remove();
    });
}