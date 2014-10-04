'use strict';

(function(){
    jQuery(document).on('click', '.select span, .select i', function(){
        jQuery('.select-box').slideToggle(10);
    });

    jQuery(document).on('click', '.select span', function(event){
      jQuery('.select span').removeClass('active');
      jQuery(event.target).addClass('active');
    });

    jQuery(document).on('click', '.ion-close-round', function(){
      var promise = jQuery('#candidateChart').highcharts().destroy();

      jQuery.when(promise).then(function(){
        jQuery('.candidate-detail').fadeOut(500);
        jQuery('html, body').animate({
            scrollTop: $('.candidates-states').offset().top
        }, 200);
      });

    });
}(jQuery));
