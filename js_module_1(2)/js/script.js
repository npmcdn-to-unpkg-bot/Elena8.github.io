var name1=[];
var nameUser;
function addName(){
var flag;
for(var i=0; i<5; i++){
	var namePrompt=prompt('Enter name :');
	name1.push(namePrompt);
    }
nameUser=prompt("Enter YOUR name");
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
addName();
