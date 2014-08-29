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
    jQuery(document).on('click', '.span-select, .box-trans-select', function(e){
        e.stopPropagation();
        jQuery(e.target).parent().find('.box-trans-hidden-select').slideToggle(50);
    });

    jQuery(document).on('click', 'body', function(){
        jQuery('.box-trans-hidden-select').hide(50);
    });

})(jQuery);