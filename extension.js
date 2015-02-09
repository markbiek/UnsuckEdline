(function($) {
    var $h1 = $('#ed-pageTitle');
    var title = $h1.html().toLowerCase().trim();

    if(title == 'private reports') {
        $('.ed-formTable td a').each( function() {
            if($(this).html().toLowerCase() == 'view') {
                var oldHref = $(this).attr('href');
                var res = oldHref.match(/.*?rlViewItm\(['"](.*?)['"].*?/);

                if(res != null && res.length > 1) {
                    var entId = res[1];
                    var url = 'https://www.edline.net/DocViewBody.page?currentDocEntid=' + entId + '&returnPage=%2FUserDocList.page';
                    $(this).attr('href', url);
                    $(this).css( {
                        'color': '#009900'
                    });
                }
            }
        });
    }
})(jQuery);

