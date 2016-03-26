var wrap=document.createElement('div');
wrap.classList.add('wrapper');
var mainWrap=document.querySelector('body');
mainWrap.insertBefore(wrap, mainWrap.firstChild);
//H1//////////
var textH1=document.createTextNode('Тест по программированию');
var h1=document.createElement('h1');
h1.appendChild(textH1);
wrap.insertBefore(h1,wrap.firstChild);

//Form////////////////
var mainForm=document.createElement('form');
wrap.insertBefore(mainForm, wrap.children[1]);

//ol/////////////////
var ol=document.createElement('ol');
mainForm.insertBefore(ol,mainForm.children[2]);

//li////////////////

var li1=document.createElement('li');
li1.classList.add('list-item');

ol.insertBefore(li1,ol.firstChild);
var liText1=document.createTextNode('Вопрос №1');
li1.insertBefore(liText1,li1.firstChild);



var br=document.createElement('br');
li1.insertBefore(br,li1.children[1]);

var li2=document.createElement('li');
li2.classList.add('list-item');
ol.insertBefore(li2,ol.children[2]);
var liText2=document.createTextNode('Вопрос №2');
li2.insertBefore(liText2,li2.firstChild);


br=document.createElement('br');
li2.insertBefore(br,li2.children[1]);

var li3=document.createElement('li');
li3.classList.add('list-item');
ol.insertBefore(li3,ol.children[4]);
var liText3=document.createTextNode('Вопрос №3');
li3.insertBefore(liText3,li3.firstChild);

br=document.createElement('br');
li3.insertBefore(br,li3.children[1]);

//label checkdox li1/////////////////////

var label1=document.createElement('label');
label1.classList.add('label-first');
li1.insertBefore(label1, li1.children[1]);
var input1=document.createElement('input');
input1.setAttribute('type','checkbox');
label1.insertBefore(input1,label1.firstChild);
var inputText1=document.createTextNode('Вариант ответа №1');
label1.insertBefore(inputText1, label1.children[1]);

var brLi1=document.createElement('br');
label1.insertBefore(brLi1,label1.children[2]);

var label2=document.createElement('label');
li1.insertBefore(label2, li1.children[3]);
var input2=document.createElement('input');
input2.setAttribute('type','checkbox');
label2.insertBefore(input2,label2.firstChild);
var inputText2=document.createTextNode('Вариант ответа №2');
label2.insertBefore(inputText2, label2.children[1]);


var brLi2=document.createElement('br');
label2.insertBefore(brLi2,label2.children[4]);

var label3=document.createElement('label');
li1.insertBefore(label3, li1.children[5]);
var input3=document.createElement('input');
input3.setAttribute('type','checkbox');
label3.insertBefore(input3,label3.firstChild);
var inputText3=document.createTextNode('Вариант ответа №3');
label3.insertBefore(inputText3, label3.children[1]);

//label checkdox li2/////////////////////
label1=document.createElement('label');
label1.classList.add('label-first');
li2.insertBefore(label1, li2.children[1]);
input1=document.createElement('input');
input1.setAttribute('type','checkbox');
label1.insertBefore(input1,label1.firstChild);
inputText1=document.createTextNode('Вариант ответа №1');
label1.insertBefore(inputText1, label1.children[1]);

brLi1=document.createElement('br');
label1.insertBefore(brLi1,label1.children[2]);

label2=document.createElement('label');
li2.insertBefore(label2, li2.children[3]);
input2=document.createElement('input');
input2.setAttribute('type','checkbox');
label2.insertBefore(input2,label2.firstChild);
inputText2=document.createTextNode('Вариант ответа №2');
label2.insertBefore(inputText2, label2.children[1]);


brLi2=document.createElement('br');
label2.insertBefore(brLi2,label2.children[4]);

label3=document.createElement('label');
li2.insertBefore(label3, li2.children[5]);
input3=document.createElement('input');
input3.setAttribute('type','checkbox');
label3.insertBefore(input3,label3.firstChild);
inputText3=document.createTextNode('Вариант ответа №3');
label3.insertBefore(inputText3, label3.children[1]);

//label checkdox li3/////////////////////
label1=document.createElement('label');
label1.classList.add('label-first');
li3.insertBefore(label1, li3.children[1]);
input1=document.createElement('input');
input1.setAttribute('type','checkbox');
label1.insertBefore(input1,label1.firstChild);
inputText1=document.createTextNode('Вариант ответа №1');
label1.insertBefore(inputText1, label1.children[1]);

brLi1=document.createElement('br');
label1.insertBefore(brLi1,label1.children[2]);

label2=document.createElement('label');
li3.insertBefore(label2, li3.children[3]);
input2=document.createElement('input');
input2.setAttribute('type','checkbox');
label2.insertBefore(input2,label2.firstChild);
inputText2=document.createTextNode('Вариант ответа №2');
label2.insertBefore(inputText2, label2.children[1]);


brLi2=document.createElement('br');
label2.insertBefore(brLi2,label2.children[4]);

label3=document.createElement('label');
li3.insertBefore(label3, li3.children[5]);
input3=document.createElement('input');
input3.setAttribute('type','checkbox');
label3.insertBefore(input3,label3.firstChild);
inputText3=document.createTextNode('Вариант ответа №3');
label3.insertBefore(inputText3, label3.children[1]);

///input submit//////////////////////////////////

var submit=document.createElement('input');
submit.setAttribute('type','submit');
submit.setAttribute('value','Проверить мои результаты');
mainForm.insertBefore(submit,mainForm.children[3]);



