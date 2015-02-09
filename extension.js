(function($) {
    var $h1 = $('#ed-pageTitle');
    var title = $h1.html().toLowerCase().trim();

    if(title == 'private reports') {
        $('.ed-formTable td a').each( function() {
            if($(this).html().toLowerCase() == 'view') {
                console.log(this);
            }
        });
    }
})(jQuery);

