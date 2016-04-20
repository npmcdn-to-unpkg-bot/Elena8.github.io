$(document).ready(function() {
 /*Slider*********************/
window.slider = $('#slide');
window.slider.simpleSlide({
    'auto':true,
    'bullets':true,
    'slideSelector':'img',
    'onInitiate':function(){
        window.slider.find('a.arrow.prev').addClass('fa fa-hand-o-left');
        window.slider.find('a.arrow.next').addClass('fa fa-hand-o-right');
    }
});

/**Select*********************/

// default
$('select').selectBox();

// or with custom settings
$('select').selectBox({
    mobile: true,
    menuSpeed: 'fast'
});

/*****Menu************************/

$(".menu li").hover(
        function() {
            $(this).find("ul:first").slideToggle().animate({backgroundColor: '#0000ff' }, 400);/*fadeIn(400);*/
            $(this).animate({backgroundColor:"#03C",}, 500 );
            $(this).addClass("active");
        }, function() {
            $(this).find("ul:first").fadeOut(0);
            $(this).removeClass("active");
    });
    
    $(".menu li:has(ul)").addClass("sub");
    /*$(this).find("ul:first").css({'backgroundColor': '#000077'});*/

/*jQuery("ul:first").mouseenter(

  function () {
    jQuery(this).animate({backgroundColor:"#03C",}, 500 );
});

 

jQuery("ul:first").mouseleave(function() {

    jQuery(this).animate({backgroundColor:"#0CF",}, 500 );

});
*/


});



