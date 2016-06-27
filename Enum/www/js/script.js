// Param.

var User = {
    username: null,
    password: null,
    device: {
        id: null,
        model: null,
        platform: null,
        version: null
    }
};

var Enum = {
    internet: false,
    host: "http://tonsau.eu:45032",
    socket: null
};



// Functions
function NextLoadingItem() {
    var items = $('.loading-feed').find('.loading-item');
    items.first().slideUp(500, function () {
        var item = $(this);
        item.css("display", "block");
        $(this).remove();
        $('.loading-feed').append(item);
    });
}