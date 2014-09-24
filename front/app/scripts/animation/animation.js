'use strict';

(function(){
    jQuery(document).on('click', '.select span, .select i', function(){
        jQuery('.select-box').slideToggle(10);
    });
}(jQuery));
