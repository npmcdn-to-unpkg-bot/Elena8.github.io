$(document).ready(function(){
// действия после полной загрузки страницы

    // проверяем, какие чекбоксы активны и меняем сласс для родительского дива
    $('.decor_checkbox').each(function(){
        var checkbox = $(this).find('input[type=checkbox]');
        if(checkbox.prop("checked")) $(this).addClass("check_active");
    });

    // при клике по диву, делаем проверку
    $('.decor_checkbox').click(function(){
        var checkbox = $(this).find('input[type=checkbox]');
        // если чекбокс был активен
        if(checkbox.prop("checked")){
            // снимаем класс с родительского дива
            $(this).removeClass("check_active");
            // и снимаем галочку с чекбокса
            checkbox.prop("checked", false);
        // если чекбокс не был активен
        }else{
            // добавляем класс родительскому диву
            $(this).addClass("check_active");
            // ставим галочку в чекбоксе
            checkbox.prop("checked", true);
        }
    });

 });

 
