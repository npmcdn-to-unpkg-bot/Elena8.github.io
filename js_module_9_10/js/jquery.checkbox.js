$(document).ready(function(){
/*$(".label-jQuary").click( 
function() {
     changeCheck($(this));
});*/

/*$(".niceCheck").click(
 при клике на чекбоксе меняем его вид и значение 

function() {
     changeCheck($(this));
     console.log('Klick!!');
});*/

/*$(".label-jQuary").each(
    function() {
     changeCheckStart($(this));
});*/


$(".niceCheck").each(
/* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
function() {
     changeCheckStart($(this));
});

 });

/*function changeCheck(el)

{
    var el = el,
    input = el.find("input").eq(0);
    if(!input.attr("checked")){
        input.attr("checked", true);
        el.css("background-position","-4px -30px");
    } else {input.attr("checked", false);
        el.css("background-position","-4px -2px"); 
            
        

        
    }
    return true;
}*/
function changeCheck(el)
/* 
016
    функция смены вида и значения чекбокса при клике на контейнер чекбокса (тот, который отвечает за новый вид)
017
    el - span контейнер для обычного чекбокса
018
    input - чекбокс
019
*/
{
    var el = el,
        input = el.find("input").eq(0);
    if(el.attr("class").indexOf("niceCheckDisabled")==-1)
    {   
        if(!input.attr("checked")) {
            el.addClass("niceChecked");
            input.attr("checked", true);
        } else {
            el.removeClass("niceChecked");
            input.attr("checked", false).focus();
        }
    }

    return true;
}


function changeVisualCheck(input)

{

/*
042
    меняем вид чекбокса при смене значения
043
*/

var wrapInput = input.parent();
    if(!input.attr("checked")) {
        wrapInput.removeClass("niceChecked");
    }

    else
    {
        wrapInput.addClass("niceChecked");
    }
}


 

/*function changeCheckStart(el)

{
var el = el,
input = el.find("input").eq(0);

    if(input.attr("checked")) {
        el.css("background-position","-4px -2px");  
          
        }else{
           el.css("background-position","-4px -30px");
            
        }
    return true;
}*/

function changeCheckStart(el)
/* 
056
    новый чекбокс выглядит так <span class="niceCheck"><input type="checkbox" name="[name check]" id="[id check]" [checked="checked"] /></span>
057
    новый чекбокс получает теже name, id и другие атрибуты что и были у обычного
058
*/

{

try

{

var el = el,

    checkName = el.attr("name"),
    checkId = el.attr("id"),
    checkChecked = el.attr("checked");
    if(checkChecked)
        el.after("<span class='niceCheck niceChecked'>"+
            "<input type='checkbox'"+
            "name='"+checkName+"'"+
            "id='"+checkId+"'"+
            "checked='"+checkChecked+"'/></span>");

    else
        el.after("<span class='niceCheck'>"+
            "<input type='checkbox'"+
            "name='"+checkName+"'"+
            "id='"+checkId+"'/></span>");

    /* если checkbox disabled - добавляем соотвсмтвующи класс для нужного вида и добавляем атрибут disabled для вложенного chekcbox */     
    if(checkDisabled)
    {
        el.next().addClass("niceCheckDisabled");
        el.next().find("input").eq(0).attr("disabled","disabled");
    }
     
    /* цепляем обработчики стилизированным checkbox */     
    el.next().bind("mousedown", function(e) { changeCheck(jQuery(this)) });
    el.next().find("input").eq(0).bind("change", function(e) { changeVisualCheck(jQuery(this)) });
    if(jQuery.browser.msie)

    {

        el.next().find("input").eq(0).bind("click", function(e) { changeVisualCheck(jQuery(this)) });   

    }

    el.remove();

}

catch(e)

{

    // если ошибка, ничего не делаем

}

    return true;
}


 
