$(window).load(function(){
    'use strict';
    function callback() {
        var query = $('#query').val();
        $.ajax({
            url: "https://pixabay.com/api/",
            data: {
                key: "2630817-b95f50d1e0fc2b68ed1f4d734",
                q: query
            },
            success: function (data) {
                console.log(data);
                var html,
                    content;
                    console.log(data.hits.length);
                if(data.hits.length>0) {
                    
                    $(".grid").remove();
                }
                $('.content3__images').css('display','none');
                html = $('#tmpl').html();
                content = tmpl(html, data);
                $('.grid__images').append(content);//grid__images
          
            }
        });
    };
    $('.content3__search').on('click', callback);

    $('#query').keypress(function (e) {
        if (e.which === 13) {
            callback();
        }
    });

    
   $('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: '.grid-item'
       

}).imagesLoaded(function() {
$('.grid').masonry('reload');
});

 /*$('.grid').imagesLoaded( function() {
        $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-item'
        });
        
    });   */
    
	   
    
    $('.flexslider').flexslider({
    animation: "slide"
  });
    
});

/*$(window).load(function(){
  	      $('.grid').masonry({
  	        itemSelector: '.grid-item',
  	        columnWidth: '.grid-item'
  	      });
    });*/
