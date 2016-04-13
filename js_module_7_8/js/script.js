$(document).ready(function(){
function tabs(tag){
	$(tag).each(function(j){
		$(this).click(function(){
			switch(j){
				case 0:
				    $tagText=$('.text'+(j+1));
			        $tagNone1=$('.text'+(j+2));
			        $tagNone2=$('.text'+(j+3));
			        $tagText.css({'display':'inline-block','border':'1px solid white'});
			        $tagNone1.css({'display':'none'});
			        $tagNone2.css({'display':'none'});
			        break;
			    case 1:
			        $tagText=$('.text'+(j+1));
			        $tagNone1=$('.text'+(j));
			        $tagNone2=$('.text'+(j+2));
			        $tagText.css({'display':'inline-block','border':'1px solid white'});
			        $tagNone1.css({'display':'none'});
			        $tagNone2.css({'display':'none'});
			        break;
			    case 2:
			        $tagText=$('.text'+(j+1));
			        $tagNone1=$('.text'+(j-1));
			        $tagNone2=$('.text'+(j));
			        $tagText.css({'display':'inline-block','border':'1px solid white'});
			        $tagNone1.css({'display':'none'});
			        $tagNone2.css({'display':'none'});
			        break;
			    }
		})
	})
}
tabs('li');

/////////////Comments////////////////////

function addComment(tag,nameClass){
    $(tag).each(function(i){
    	$(this).mousemove(function(){
    		$sel=$('.add-text'+i);
    		$sel.stop(true).css('display','inline-block');
    	})
    	$(this).mouseout(function(){
    		$sel.stop(true).css('display','none');
    	})
    })
}

function buttonShow(tag){
	$(tag).click(function(){
		$('.add-text0').css('display','inline-block');
		$('.add-text1').css('display','inline-block');
		$('.add-text2').css('display','inline-block');
	})
}

addComment('input','.add-text');
buttonShow('input[type=button]');
});
