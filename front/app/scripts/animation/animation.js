'use strict';

(function(){
    jQuery(document).on('click', '.select span, .select i', function(){
        jQuery('.select-box').slideToggle(10);
    });

    var elements = document.getElementsByClassName('block');
    var colors = chroma.scale('Set1').domain([0,1], elements.length).colors();


    for(var i = 0; i < elements.length; i++){
        elements[i].style.backgroundColor = colors[i];
    }

}(jQuery));
