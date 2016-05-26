"use strict";

$(document).ready(function () {
    "use strict";
    //var answerArr1,

    var objAnsw = void 0,
        checkboxBlock = void 0,
        checkedBlock = void 0,
        click1 = void 0,
        content = void 0,
        html = void 0,
        answStr = void 0,
        answTrue = void 0,
        chbId = void 0,
        i = void 0,
        j = void 0,
        kol = void 0,
        kolNotTrue = void 0,
        getLocalStr = void 0;
    $(function () {
        var objAnsw = { answ: ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"],
            answerArr1: ["Вопрос №1", "Вопрос №2", "Вопрос №3"]
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
        $('button').click(function () {
            $('.wrapperModal').css('display', 'none');
            $(':checked').removeAttr('checked');
            $('input[type=checkbox]').removeAttr('disabled');
            kol = 0;
        });
    });

    function windModal() {
        $("body").append("<div class='wrapperModal'></div>");

        if (kol === 3) {
            $(".wrapperModal").append('<p class="modal_elem_h1">Тест Сдан!!!</p>');
        } else {
            $(".wrapperModal").append('<p class="modal_elem_h1">Тест Провален!!!</p>');
        }
        $(".wrapperModal").append('<p class="modal_elem">Правильных ответов:' + kol + ' </p>');
        $(".wrapperModal").append('<p class="modal_elem">Неправильных ответов:' + kolNotTrue + ' </p>');
        $(".wrapperModal").append('<button>Close</botton>');
    }
});
