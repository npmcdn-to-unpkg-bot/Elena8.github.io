var name1=[];
function promptAdd(){
    for(var i=0; i<5; i++){
	var namePrompt=prompt('Enter name :');
	name1.push(namePrompt);
    }
}

function addName(nameUser){
prompt();	
var flag;
for(var j=0; j<=name1.length-1; j++){
	if(name1[j]==nameUser && (name1[j]!==null) && (name1[j]!==''))
	{
		if((name1[j]===null) && (name1[j]==='')){
		flag=0;
	        }else {
		flag=1;
		break;
	        }
	}else{
		flag=0;
	}
}
        if(flag==1){
	    alert(nameUser+',Вы успешно вошли!');
        }else{
	alert('ERROR!!');
        }
}

var nameUser=prompt("Enter YOUR name");
addName(nameUser);
