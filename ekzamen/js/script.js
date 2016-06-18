$(window).load(function(){
//$(function() {
    'use strict';
    var key="2630817-b95f50d1e0fc2b68ed1f4d734";
                
    
    function callback() {
        var query = $('#query').val();
        var URL = "https://pixabay.com/api/?key="+key+"&q="+query+"&image_type=photo&callback=?";
        $.ajax({
            url:URL,
            dataType: "jsonp",
            success: function (data) {
                //console.log(data);
                var html,
                    content;
                    //console.log(data.hits.length);
                if(data.hits.length>0) {
                    
                    $(".grid").remove();
                    //console.log(data.hits.length);
                }
                $('.content3__images').css('display','none');
                html = $('#tmpl').html();
                content = tmpl(html, data);
                $('.grid__images').append(content);
                //grid__images
                
          
            }
        });
        
    };
    
    
   $('.content3__search').on('click', callback);
    

    $('#query').keypress(function (e) {
        if (e.which === 13) {
            callback();
        }
    });
    
    $('.flexslider').flexslider({
    animation: "slide"
  }); 
    
   
    
    // or with jQuery
    // initialize Masonry
    var $grid = $('.grid');
    // layout Masonry again after all images have loaded
    $grid.imagesLoaded( function() {
      $grid.masonry({
          itemSelector: '.grid-item',
  columnWidth: '.grid-item',
        percentPosition: true
      });
    });
  

	   
    
    
   
});