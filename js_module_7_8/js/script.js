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
	/*$('.list-item1').click(function(){
		$('.text1').css({'display':'inline-block','border':'1px solid white'});
		$('.text2').css('display','none');
		$('.text3').css('display',' none');
	});
	$('.list-item2').click(function(){
		$('.text1').css('display',' none');
		$('.text2').css('display',' inline-block');
		$('.text3').css('display',' none');
	});
	$('.list-item3').click(function(){
		$('.text1').css('display',' none');
		$('.text2').css('display','none ');
		$('.text3').css('display',' inline-block');
	})*/


/////////////Comments////////////////////

	/*$('.inp-text1').mousemove(function(){
		$('.first-name1').css('display','inline-block');
	})
	$('.inp-text1').mouseout(function(){
		$('.first-name1').css('display','none');
	})

	$('.inp-text2').mousemove(function(){
		$('.last-name1').css('display','inline-block');
	})
	$('.inp-text2').mouseout(function(){
		$('.last-name1').css('display','none');
	})
	$('.inp-text3').mousemove(function(){
		$('.adress1').css('display','inline-block');
	})
	$('.inp-text3').mouseout(function(){
		$('.adress1').css('display','none');
	})*/


/*for(var i=1; i<4; i++){
    var $hoverInp=$('.inp-text'+i);
    console.log($hoverInp);
    $hoverInp.mousemove(function(){
	    $('.first-name1').css('display','inline-block');
    })
}*/

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