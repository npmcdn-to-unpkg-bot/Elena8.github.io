$(function(){
    console.log("masonry");
     var $grid = $('.grid').imagesLoaded( function() {
        $grid.masonry({
            
            // options
  itemSelector: '.grid-item',
  columnWidth: '.grid-item',
        percentPosition: true});
    });
});