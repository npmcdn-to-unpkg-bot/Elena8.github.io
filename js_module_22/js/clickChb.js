/*function click1 (){
    //console.log("click");
      checkboxBlock=$(".checkbox--block1 input[type='checkbox']").map(function(){// vse checkbox v odnom blocke
            return this.id;
        });
        //console.log("check", checkboxBlock);
        checkedBlock=$(".checkbox--block1 :checked").map(function(){//otmechenniy checkbox
            return this.id;
        });
        
        //console.log(checkedBlock);
        //debugger;
        for (i=0; i<3; i+1){
            //debugger;
            //console.log("input[]",$("input[id="+checkboxBlock[i]+"]"));
            if(checkedBlock.length>=1){//if odin checkbox-checked, to vse ostalnie disable
                $("input[id="+checkboxBlock[i]+"]").prop("disabled",true);
                console.log("111 dis",$("input[id="+checkboxBlock[i]+"]"));
                
            //for (j=0; j<checkedBlock.length; j+1){
                $("input[id="+checkedBlock[0]+"]").prop("disabled",false);break;
            //}
            }else{
                $("input[id="+checkboxBlock[i]+"]").prop("disabled",false);
                console.log("22 Undis",$("input[id="+checkboxBlock[i]+"]"));
            }
            
        }
        
     };   */


function click1() {
    var w = document.querySelector('.wrapper');
    var f = w.querySelector('form');
    var main = f.querySelector('.checkbox--block1');
    var n = main.querySelectorAll('[type="checkbox"]'),
        l = main.querySelectorAll('[type="checkbox"]:checked');
    
    for (var j = 0; j < n.length; j++)
    if (l.length >= 1) { // если отметить три и более галочки
      n[j].disabled = true; // все чекбоксы становятся disabled
      for(var i = 0; i < l.length; i++)
        l[i].disabled = false; // но disabled убирается с помеченных галочками чекбоксов
    } else {
      n[j].disabled = false; // если выделить менее трёх галочек, то disabled снимается со всех чекбоксов
    }
}

function click2() {
    var w = document.querySelector('.wrapper');
    var f = w.querySelector('form');
    var main = f.querySelector('.checkbox--block2');
    var n = main.querySelectorAll('[type="checkbox"]'),
        l = main.querySelectorAll('[type="checkbox"]:checked');
    
  for (var j = 0; j < n.length; j++)
    if (l.length >= 1) { // если отметить три и более галочки
      n[j].disabled = true; // все чекбоксы становятся disabled
      for(var i = 0; i < l.length; i++)
        l[i].disabled = false; // но disabled убирается с помеченных галочками чекбоксов
    } else {
      n[j].disabled = false; // если выделить менее трёх галочек, то disabled снимается со всех чекбоксов
    }
}

function click3() {
    var w = document.querySelector('.wrapper');
    var f = w.querySelector('form');
    var main = f.querySelector('.checkbox--block3');
    var n = main.querySelectorAll('[type="checkbox"]'),
        l = main.querySelectorAll('[type="checkbox"]:checked');
    
  for (var j = 0; j < n.length; j++)
    if (l.length >= 1) { // если отметить три и более галочки
      n[j].disabled = true; // все чекбоксы становятся disabled
      for(var i = 0; i < l.length; i++)
        l[i].disabled = false; // но disabled убирается с помеченных галочками чекбоксов
    } else {
      n[j].disabled = false; // если выделить менее трёх галочек, то disabled снимается со всех чекбоксов
    }
}


