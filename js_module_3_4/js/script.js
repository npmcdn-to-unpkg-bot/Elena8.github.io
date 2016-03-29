/*var wrap=document.createElement('div');
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
mainForm.insertBefore(submit,mainForm.children[3]);*/

var obj={

createElements: function (varName,tag,nameClass,mainTagVar,mainTag,position){
    varName=document.createElement(tag);

    varName.classList.add(nameClass);
    mainTagVar=document.querySelector(mainTag);
    mainTagVar.insertBefore(varName,mainTagVar.children[position]);
},

createLabels:function (tag, classEl, parentsEl) {
        tag = document.createElement(tag);
        parentsEl.appendChild(tag);
        tag.classList.add(classEl);
      },

createInputs:function(tag,classEl,parentsEl,type){
        tag = document.createElement(tag);
        
        parentsEl.appendChild(tag);
        tag.setAttribute('type',type);
        tag.classList.add(classEl);

},

createText: function(varTag,text){
	varTag.innerHTML = text;
}

};
var answerArr=['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3'];
var tagTag;
var classLi1;
var classLi2;
var classLi3;
var elLabel;
obj.createElements('wrap','div','wrapper','mainWrap','body',0);
obj.createElements('hh1','h1','hh_1','wrap','.wrapper',0);
tagTag=document.querySelector('h1');
obj.createText(tagTag,'Тест по программированию');
obj.createElements('mainForm','form','formMain','wrap','.wrapper',1);
obj.createElements('oll','ol','list','mainForm','form', 0);
//Create li
for(var i=0;i<3;i++){
obj.createElements('li'+[i+1],'li','list-item'+[i+1],'ol1','ol',i);
}

classLi1= document.getElementsByClassName('list-item1');
classLi2 = document.getElementsByClassName('list-item2');
classLi3 = document.getElementsByClassName('list-item3');

obj.createText(classLi1[0],'Вопрос №1');obj.createLabels('br','br',classLi1[0]);
obj.createText(classLi2[0],'Вопрос №2');obj.createLabels('br','br',classLi2[0]);
obj.createText(classLi3[0],'Вопрос №3');obj.createLabels('br','br',classLi3[0]);
//create labels
for(var j=0;j<3;j++){
  obj.createLabels('label','label1'+[j+1],classLi1[0]);
}

for(var j=0;j<3;j++){
  obj.createLabels('label','label2'+[j+1],classLi2[0]);
}

for(var j=0;j<3;j++){
  obj.createLabels('label','label3'+[j+1],classLi3[0]);
}
//add answers
elLabel=document.getElementsByTagName('label');
console.log("elLabel",elLabel);

for(var m=0;m<3;m++){
  obj.createText(elLabel[m],answerArr[m]);
}
for(var m=3;m<6;m++){
  obj.createText(elLabel[m],answerArr[m-3]);
}
for(var m=6;m<9;m++){
  obj.createText(elLabel[m],answerArr[m-6]);
}

//create checkbox
for(var k=0; k<elLabel.length; k++)
{
  obj.createInputs('input','input',elLabel[k],'checkbox');
  obj.createLabels('br','br',elLabel[k]);
}

//create submit
var formTag=document.getElementsByTagName('form');
obj.createInputs('input','submit',formTag[0],'submit');




