$(document).ready(function () {
    $(".carousel").Carousel();
   
 //function htmSlider(){
  /* Зададим следующие параметры */
  /* обертка слайдера */
  //var slideWrap = jQuery('.carousel-list');
  /* кнопки вперед/назад и старт/пауза */
  /*var nextLink = jQuery('.carousel-next');
  var prevLink = jQuery('.carousel-prev');
  var $navLink=$('.car-link');
  var $carLi=$('.carousel-elment');
  var $img=$('.carousel-img');
  /* Проверка на анимацию */
  //var is_animate = false;
  /* ширина слайда с отступами */
  //var slideWidth = jQuery('.carousel-elment').outerWidth();
  /* смещение слайдера */
  //var scrollSlider = slideWrap.position().left - slideWidth;
		
  /* Клик по ссылке на следующий слайд */
  /*nextLink.click(function(){
   if(!slideWrap.is(':animated')) {
    slideWrap.animate({left: scrollSlider}, 500, function(){
     slideWrap
      .find('.carousel-elment:first')
      .appendTo(slideWrap)
      .parent()
      .css({'left': 0});
    });
   }
  });*/

  /* Клик по ссылке на предыдующий слайд */
  /*prevLink.click(function(){
   if(!slideWrap.is(':animated')) {
    slideWrap
     .css({'left': scrollSlider})
     .find('.carousel-elment:last')
     .prependTo(slideWrap)
     .parent()
     .animate({left: 0}, 500);
   }
  });*/

  /*$navLink.click(function(){
   var index=$(this).index();
   $navLink.removeAttr('class','active');
   $(this).attr('class','active'); 
   /*$img.removeAttr('class');
   $img.eq(index).attr('class','activeI');*/
   /*$carLi.removeAttr('id');
   $carLi.eq(index).attr('id','activeLi');

   $carLi.each(index).appendTo(slideWrap)
      .parent()
      .css({'left': 0});
    console.log( $carLi.eq(index));
   
  });*/

/*$navLink.each(function(i){
  $(this).click(function(){

    var index=$(this).index();
    console.log(index);
   $navLink.removeAttr('class','active');
   $(this).attr('class','active'); 
   
   $carLi.removeAttr('id');
   $carLi.eq(index).attr('id','activeLi');
  console.log('carLi',$carLi.eq(i).index());
   $carLi.eq(i)
   .prependTo(slideWrap)
     .parent()
     .animate({left: 0}, 500);

  })

});

}	

htmSlider();*/

/******Shablonizator*************/
var html=$('#about').html();
var header={
  hh:'Даниленко Елена Николаевна',
  img:'img/f1.jpg',
  student:'Студент Go for IT',
  listH:'Хочу учить фронтенд,потому что:',
  contactTel:'Мой контактный телефон',
  tel:'+380638066603',
  profileVk:'Мой профиль вконтакте',
  hrefVk:'http://vk.com/id5214451',
  fidback:'Мой фидбэк:',
  fidText:'Забор строить не умею;)',
  listItem:[
    'Хочу работать в данном направлении;',
    'Это очень интересно;',
    'Хочу получить работу,которая будет приносить удовольствие.'
  ]
  
};
var content=tmpl(html,header);
/*var content1=tmpl(html,{:listItem});*/
$('.content').append(content);
/*$('.content').append(content1);*/

});
