(function ($) {
    //$.fn.htmlSlider = function () {
  /* Зададим следующие параметры */
  /* обертка слайдера */
        //var slideWrap = $('.carousel-list'),
            /* кнопки вперед/назад и старт/пауза */
           /* nextLink = $('.carousel-next'),
            prevLink = $('.carousel-prev'),
            $navLink = $('.car-link'),
            $carLi = $('.carousel-elment'),
            $img = $('.carousel-img'),
            /* Проверка на анимацию */
            //is_animate = false,
            /* ширина слайда с отступами */
            //slideWidth = $('.carousel-elment').outerWidth(),
            /* смещение слайдера */
            //scrollSlider = slideWrap.position().left - slideWidth;
  /* Клик по ссылке на следующий слайд */
        /*nextLink.click(function () {
            
            
            if (!slideWrap.is(':animated')) {
                slideWrap.animate({left: scrollSlider}, 500, function () {
                    slideWrap
                        .find('.carousel-elment:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({'left': 0});
                    var index = $('.carousel-elment').index();
            console.log('index next',index);
                $navLink.removeAttr('class', 'active');
                    $navLink.eq(index).attr('class', 'active'); 
                });
                
                
            }
        });

  /* Клик по ссылке на предыдующий слайд */
       /* prevLink.click(function () {
            if (!slideWrap.is(':animated')) {
                slideWrap
                    .css({'left': scrollSlider})
                    .find('.carousel-elment:last')
                    .prependTo(slideWrap)
                    .parent()
                    .animate({left: 0}, 500);
            }
        });
        /*navigaciya*/
        //$navLink.each(function (i) {
        //$nav=$('.car-link');
            /*$navLink.click(function () {

                var index = $(this).index();
                console.log(index);
                $navLink.removeAttr('class', 'active');
                $(this).attr('class', 'active');  
                $carLi.removeAttr('id');
                //debugger;
                $carLi.eq(index).attr('id', 'activeLi');
                //debugger;
                console.log('carLi', $carLi.eq(index).index());
                $carLi.eq(index)
                    .prependTo(slideWrap)
                    .parent()
                    .animate({left: 0}, 500);
                //if (!slideWrap.is(':animated')) {
                //slideWrap
                    //.css({'left': scrollSlider})
                    /*.find($carLi.eq(index))
                    .prependTo(slideWrap)
                    .parent()
                    .animate({left: 0}, 500);*/
           // });
                
                
            
         
     //return this;  
    //};
    
    ///****************************************************
   
        $.fn.Carousel = function(options) {
                // Настройки по умолчанию
                var settings = {
                        visible: 3,  //количество отображаемых позиций 3
                        rotateBy: 1, //прокручивать по 1
                        speed: 1000, //скорость 1 секунда
                        btnNext:$('.carousel-prev'), // кнопка вперед не назначена
                        btnPrev: $('.carousel-next'), // кнопка назад не назначена
                        auto: false, // авто прокрутка включена
						margin: 10,	// отступ между позициями
						position: "h",// расположение по горизонтали
                        dirAutoSlide: false //направление движения в перед для автопрокрутки
                };
     
                return this.each(function() {
                        if (options) {
                                $.extend(settings, options); //устанавливаем пользовательские настройки 
                        }
                        
                        // определяем переменные
                        var $this = $(this);//родительский элемент (Блок в котором находится карусель)						
                        var $carousel = $this.children(':first');// получаем дочерний элемент (UL) т.е. саму карусель
						var itemWidth = $carousel.children().outerWidth()+settings.margin; // вычисляем ширину элемента
						var itemHeight = $carousel.children().outerHeight()+settings.margin;// вычисляем высоту элемента					  
					    var itemsTotal = $carousel.children().length; // получаем общее количество элементов в каруселе
                        var running = false; //останавливаем процесс
                        var intID = null; //отчищаем интервал
                        
						//size - размер для вычисления длины, зависит от ориентации карусели
						var size = itemWidth; 
					   $this.css({
                                'position': 'relative', // необходимо для нормального отображения в ИЕ6(7)
                                'overflow': 'hidden', // прячем все, что не влезает в контейнер
                                'width': settings.visible * size + 'px' ,// ширину контейнера ставим равной ширине всех видимых элементов
								'height': itemHeight-settings.margin
					   });
					   //вычисляем расстояние отупа от каждого элемента
					    $carousel.children('.carousel-elment').css({
                        'margin-left': settings.margin/2+ 'px',
						'margin-right': settings.margin/2+ 'px', 
			
					   });				   
					
					   
                        // в зависимости от ориентации, увеличиваем длину или ширину карусели
						 $carousel.css({
                               'position': 'relative', // разрешаем сдвиг по оси
                               'width':1000 + 'px', // увеличиваем лену карусели
                               'top': 0,
							   'left':0
                        });
	

						//прокрутка карусели в наравлении dir [true-вперед; false-назад]
                        function slide(dir) {
						
                                var direction = !dir ? -1 : 1; // устанавливаем заданное направление
                                var Indent = 0; // смещение (для ul)
                                
                                if (!running) {							
								// если анимация завершена (или еще не запущена)
                                        running = true; // ставим флажок, что анимация в процессе
                                        
                                        if (intID) { // если запущен интервал
                                                window.clearInterval(intID); // очищаем интервал                                        	
										}
                                        
                                        if (!dir) { // если мы мотаем к следующему элементу (так по умолчанию)
                                                /*
                                                * вставляем после последнего элемента карусели
                                                * клоны стольких элементов, сколько задано
                                                * в параметре rotateBy (по умолчанию задан один элемент)
                                                */
											
	$carousel.children(':last').after($carousel.children().slice(0,settings.rotateBy).clone(true));
                                        } else { // если мотаем к предыдущему элементу
                                                /*
                                                * вставляем перед первым элементом карусели
                                                * клоны стольких элементов, сколько задано
                                                * в параметре rotateBy (по умолчанию задан один элемент)
                                                */
                                                $carousel.children(':first').before($carousel.children().slice(itemsTotal - settings.rotateBy, itemsTotal).clone(true));
                                                
                                                /*
                                                * сдвигаем карусель (<ul>)  на ширину/высоту  элемента,
                                                * умноженную на количество элементов, заданных
                                                * в параметре rotateBy (по умолчанию задан один элемент)
                                                */
												$carousel.css('left', -size * settings.rotateBy + 'px');
                                        }
                                        
                                        /*
                                        * расчитываем  смещение
                                        * текущее значение  + ширина/высота  одного элемента * количество проматываемых элементов * на направление перемещения (1 или -1)
                                        */
										Indent = parseInt($carousel.css('left')) + (size * settings.rotateBy * direction);
                                     	
										var animate_data={'left': Indent};
										// запускаем анимацию
                                        $carousel.animate(animate_data, {queue: false, duration: settings.speed, complete: function() {
                                                                                   
										  // когда анимация закончена
                                                if (!dir) { // если мы мотаем к следующему элементу (так по умолчанию)
                                                        // удаляем столько первых элементов, сколько задано в rotateBy
                                                        $carousel.children().slice(0, settings.rotateBy).remove();
                                                        // устанавливаем сдвиг в ноль
												
														$carousel.css('left', 0);
                                                } else { // если мотаем к предыдущему элементу
                                                        // удаляем столько последних элементов, сколько задано в rotateBy
                                                        $carousel.children().slice(itemsTotal, itemsTotal + settings.rotateBy).remove();
                                                }
                                                
                                                if (settings.auto) { // если карусель должна проматываться автоматически
                                                        // запускаем вызов функции через интервал времени (auto)
                                                        intID = window.setInterval(function() { slide(settings.dirAutoSlide); }, settings.auto);
                                                }
                                                
                                                running = false; // отмечаем, что анимация завершена
                                        }});
                                }
                                
                                return false; // возвращаем false для того, чтобы не было перехода по ссылке
                        }
                        
                        // назначаем обработчик на событие click для кнопки "вперед"
                        $(settings.btnNext).click(function() {                            
							 return slide(false);								
                        });
                        
                        // назначаем обработчик на событие click для кнопки "Назад"
                        $(settings.btnPrev).click(function() {
                                return slide(true);
                        });
                        
                        if (settings.auto) { // если карусель должна проматываться автоматически
                                // запускаем вызов функции через временной интервал
                                intID = window.setInterval(function() { slide(settings.dirAutoSlide); }, settings.auto);
                        }
                });
        };
    
})(jQuery);
 