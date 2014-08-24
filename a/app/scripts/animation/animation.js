'use strict';

/**
 * Animations used in transparenciaBrasilApp
 */

(function(){

    /* Focus on search */
    jQuery(document).on('focus', '#searchHeader', function(){
        jQuery(this).attr('value', '');
    });

    jQuery(document).on('focusout', '#searchHeader', function(){
        jQuery(this).attr('value', 'Localizar candidato...');
    });

    /* Show select box in home */
    jQuery(document).on('click', '.span-select', function(e){
        e.stopPropagation();
        jQuery(e.target).parent().find('.box-trans-hidden-select').slideToggle(50);
    });

    jQuery(document).on('click', 'body', function(){
        jQuery('.box-trans-hidden-select').hide(50);
    });

    /* Go next step */
    var iteration = true;
    var value = 0;
    jQuery(document).on('click', '.ion-arrow-right-c, .li-select-state, .li-select-person', function(){
        var promise = jQuery(this).parent().closest('.default-trans-container').next('.default-sections-hidden').fadeIn(100);
        var element = jQuery(this).parent().closest('.default-trans-container').next('.default-sections-hidden');

        if (iteration) {
            value = document.body.clientHeight * 2;
            iteration = false;
        }

        jQuery.when(promise).then(function(){
            jQuery('body').css({'height': value});
            jQuery('html, body').animate({
                scrollTop: parseInt(jQuery(element).offset().top)
            }, 500);
        });
    });

})(jQuery);