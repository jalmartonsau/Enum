// Param.

var User = {
    id: null,
    username: null,
    password: null,
    device: {
        id: null,
        model: null,
        platform: null,
        version: null
    }
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