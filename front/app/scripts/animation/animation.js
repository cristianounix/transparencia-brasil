'use strict';

(function(){
    jQuery(document).on('click', '.select span, .select i', function(){
        jQuery('.select-box').slideToggle(10);
    });

    jQuery(document).on('click', '.select span', function(event){
      jQuery('.select span').removeClass('active');
      jQuery(event.target).addClass('active');
    });
}(jQuery));
