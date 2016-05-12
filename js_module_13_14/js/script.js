$(document).ready(function () {
    "use strict";
   //var answerArr1,
    var objAnsw,
        checkboxBlock,
        checkedBlock,
        click1,
        content,
        html,
        answStr,
        answTrue,
        chbId,
        i,
        j,
        kol,
        kolNotTrue,
        getLocalStr;
    $(function () {
        var objAnsw = {answ: ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"],
                answerArr1 : ["Вопрос №1", "Вопрос №2", "Вопрос №3"]
                };
    

        answStr = JSON.stringify(objAnsw);
        localStorage.setItem('localStrAnsw', answStr);
        getLocalStr = localStorage.getItem('localStrAnsw');
        getLocalStr = JSON.parse(getLocalStr);
    
        html = $("#test").html();
        content = tmpl(html, getLocalStr);
	
	    $('.list--test').append(content);
        
        
        
    });
    
    $(".submit--answers").click(function (event) {
        event.preventDefault();

        answTrue = ["chb11", "chb23", "chb31"];
        chbId = $(":checked").map(function () {
            return this.id;
        });
        kol = 0;
        kolNotTrue = 0;
        
        if (chbId[0] === answTrue[0]) {
            kol = kol + 1;
        } else {
            kolNotTrue = kolNotTrue + 1;
        }
        
        if (chbId[1] === answTrue[1]) {
            kol = kol + 1;
        } else {
            kolNotTrue = kolNotTrue + 1;
        }
        if (chbId[2] === answTrue[2]) {
            kol = kol + 1;
        } else {
            kolNotTrue = kolNotTrue + 1;
        }
        windModal();
        $('.wrapperModal').css('display', 'block');
        $('.wrapperModal').click(function(){
			$('.wrapperModal').css('display', 'none');
			//$(':checked').removeAttr('checked');
		});
        $(':checked').removeAttr('checked');
        
    });
    
    function windModal() {
        $("body").append("<div class='wrapperModal'></div>");
        
        if (kol === 3) {
            $(".wrapperModal").append('<p class="modal_elem_h1">Тест Сдан!!!</p>');
            
        } else {
            $(".wrapperModal").append('<p class="modal_elem_h1">Тест Провален!!!</p>');
        }
        $(".wrapperModal").append('<p class="modal_elem">Правильных ответов:' + kol  + ' </p>');
        $(".wrapperModal").append('<p class="modal_elem">Неправильных ответов:' + kolNotTrue  + ' </p>');
        //$(".wrapperModal").append('<button>Close</botton>');
    }
});
