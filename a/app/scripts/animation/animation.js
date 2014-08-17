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
    jQuery(document).on('click', '.row-box-select', function(){
        jQuery(this).find('.box-trans-hidden-select').slideToggle(50);
    });

})(jQuery);