(function($) {
    var convertPrivateReportLinks = function() {
        //Attempt to load the page title
        //Return if we don't have one
        var $h1 = $('#ed-pageTitle');
        if($h1.length <= 0) {
            return;
        }
        var title = $h1.html().toLowerCase().trim();

        if(title == 'private reports') {
            //Make sure we don't process the page more than once
            if($('.unsuckedline-info').length > 0) {
                return;
            }

            //Add a short info statement to the page
            var html = '<p class="unsuckedline-info" style="padding-top:5px;font-style:italic;">Green links are now safe to open in a new tab (CTRL-click to open).</p>';
            $('form .ed-formTable:first-child tbody tr:first-child .ed-tdEnd').append(html);

            //Find all of the 'View' report links and convert each one from a JS call to a real link
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
    };

    convertPrivateReportLinks();
})(jQuery);

