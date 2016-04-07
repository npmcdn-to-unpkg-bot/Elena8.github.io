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
        //parentsEl.insertBefore(tag,parentsEl.children[1]);
        tag.classList.add(classEl);
      },
createInputs:function(tag,classEl,parentsEl,type,position){
        tag = document.createElement(tag);
        parentsEl.insertBefore(tag,parentsEl.children[position]);
        tag.setAttribute('type',type);
        tag.classList.add(classEl);
},
createText: function(varTag,text,position){
	varTag.innerHTML ='<span>'+text+'</span>';
}};
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
obj.createText(classLi1[0],'Вопрос №1',0);obj.createLabels('br','br',classLi1[0]);
obj.createText(classLi2[0],'Вопрос №2',0);obj.createLabels('br','br',classLi2[0]);
obj.createText(classLi3[0],'Вопрос №3',0);obj.createLabels('br','br',classLi3[0]);
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
for(var m=0;m<3;m++){
  obj.createText(elLabel[m],answerArr[m],1);
}
for(var m=3;m<6;m++){
  obj.createText(elLabel[m],answerArr[m-3],1);
}
for(var m=6;m<9;m++){
  obj.createText(elLabel[m],answerArr[m-6],1);
}
//create checkbox
for(var k=0; k<elLabel.length; k++)
{
  obj.createInputs('input','input',elLabel[k],'checkbox',0);
  obj.createLabels('br','br',elLabel[k]);
}
//create submit
var formTag=document.getElementsByTagName('form');
obj.createInputs('input','submit',formTag[0],'submit');






