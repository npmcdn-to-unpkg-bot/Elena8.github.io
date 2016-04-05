var name1=[];
function addName(nameUser){
var flag;
for(var j=0; j<=name1.length-1; j++){
	if(name1[j]==nameUser)
	{
		if(name1[j]===null || name1[j]===undefined){
		flag=0;
	}else {
		flag=1;
		break;}
	}
	else{
		flag=0;
	}


}

if(flag==1)
{
	alert(nameUser+',Вы успешно вошли!');
}
else{
	alert('ERROR!!');
}

}



for(var i=0; i<5; i++){
	var namePrompt=prompt('Enter name :');
	name1.push(namePrompt);
}

var nameUser=prompt("Enter YOUR name");
addName(nameUser);
