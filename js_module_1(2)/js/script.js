
var name1=[];

for(var i=0; i<5; i++){
	var namePrompt=prompt('Enter name :');
	name1.push(namePrompt);
}

var nameUser=prompt("Enter YOUR name");
var flag;
for(var j=0; j<=name1.length-1; j++){
	if(name1[j]==nameUser)
	{
		flag=1;
		break;
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

