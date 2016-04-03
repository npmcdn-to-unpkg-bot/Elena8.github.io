var base = 60; 
var clocktimer,dateObj,strHour,strMinute,strSec,millisec; 
var readout=''; 
var readoutMs='';

var hour=1, minut=1, timeMinut=1,sec=0,timeSec=0,millisec=0,show=true, init=0, ii=0; 

//функция для очистки поля
function clearСlock() { 
  clearTimeout(clocktimer); 
  hour=1;
  minut=1;
  timeMinut=1;
  sec=0;
  timeSec=0;
  millisec=0; 
  init=0;
  show=true; 
  readout='00:00:00'; 
  readoutMs='000';
  document.form1.textInp1.value=readout; 
  document.form1.textInp2.value=readoutMs; 
  document.getElementById('inpB1').style='background: linear-gradient(to top left,#008B00,#00EE00)';
  document.getElementById('inpB1').setAttribute('value','Start');
  ii = 0; 
} 

function startTIME() { 
  var cdateObj = new Date(); 
  var t = (cdateObj.getTime() - dateObj.getTime())-(sec*1000); 
  if(t>999){
    sec++;
  }

  if(sec>=(minut*base)){
    timeSec=0;
    minut++;
  }
  else{
    timeSec=parseInt((millisec/1000)+sec);
    if(timeSec>=base) { 
      timeSec=timeSec-((minut-1)*base); 
    }

  }

   if (minut>(hour*base)) { 
    timeMinut=1; 
    hour++; 
  } else { 
    timeMinut=parseInt((millisec/10000)+minut);
    if(timeMinut>=base) { 
      timeMinut=timeMinut-((hour-1)*base); 
    } 
  } 

  millisec = Math.round(t/1);
  if (millisec>999) {
    millisec=0;
  } 
  if (millisec==0) {
    millisec='000';
  } 
  if (millisec>0 && millisec<=9) {
    millisec= '00'+millisec; 
  }
  if (millisec>10 && millisec<=99) {
    millisec= '0'+millisec; 
  }
  
  if (millisec>100 && millisec<=999) {
    millisec=millisec; 
  }


  if (timeSec>0) {
   strSec = timeSec;
    if (timeSec<10) { 
      strSec = '0'+timeSec; 
    }} else {
     strSec = '00'; 
    } 
  strMinute=timeMinut-1; 
  if (strMinute>0) {
   if (strMinute<10) { 
    strMinute = '0'+strMinute; 
  }} else { 
    strMinute = '00'; 
    } 
  strHour=hour-1; 
  if (strHour>0) { 
    if (strHour<10) {
     strHour = '0'+strHour; 
   }} else { 
    strHour = '00'; 
   } 

   
  readout = strHour + ':' + strMinute + ':' + strSec ;
  readoutMs= millisec;
  if (show==true) {
   document.form1.textInp1.value = readout; 
   document.form1.textInp2.value=readoutMs;
 } 
  clocktimer = setTimeout("startTIME()",1); 
}

function pause() { 
  if (init==0) { 
  dateObj = new Date(); 
  startTIME(); 
  
  document.getElementById('inpB1').style='background: linear-gradient(to top left,#00868B,#00F5FF)';
  document.getElementById('inpB1').setAttribute('value','Pause');
  init=1;
  
  } else { if(show==true) { 
  show=false; 
  document.getElementById('inpB1').style='background: linear-gradient(to top left,#008B00,#00EE00)';
  document.getElementById('inpB1').setAttribute('value','Cont...');
  } else { 
    show=true;
    document.getElementById('inpB1').style='background: linear-gradient(to top left,#00868B,#00F5FF)';
    document.getElementById('inpB1').setAttribute('value','Pause');
  } } 
} 

function createEl(tag,nameEl,parentsEl){
        tag1 = document.createElement(tag);
        parentsEl=document.querySelector(parentsEl);
        parentsEl.appendChild(tag1);
        tag1.name=nameEl;
}

function createInputText(tag,nameEl,parentsEl,type,classEl){
        tag = document.createElement(tag);
        parentsEl=document.querySelector(parentsEl);
        parentsEl.appendChild(tag);
        tag.setAttribute('type',type);
        tag.name=nameEl; 
        tag.classList.add(classEl);  
}

function createInputButton(tag,classEl,parentsEl,type,value,onClck,id){
        tag = document.createElement(tag);
        parentsEl=document.querySelector(parentsEl);
        parentsEl.appendChild(tag);
        tag.setAttribute('type',type);
        tag.setAttribute('value',value);
        tag.setAttribute('onclick',onClck);
        tag.classList.add(classEl); 
        tag.id=id; 
}

createEl('wrapper','wrap','body');
createEl('form','form1','wrapper');
createEl('div','inputText','form');
createInputText('input','textInp1','div','text','inp1');
createInputText('input','textInp2','div','text','inp2');
createInputButton('input','inpButton2','form','button','Start','pause()','inpB1');
document.getElementById('inpB1').style='background: linear-gradient(to top left,#008B00,#00EE00)';
createInputButton('input','inpButton3','form','button','Clear','clearСlock()','inpB2');
document.form1.textInp1.value = '00:00:00'; 
document.form1.textInp2.value='000';