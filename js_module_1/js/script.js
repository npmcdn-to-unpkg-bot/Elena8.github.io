var chislo=0;
var stepen=0;

chislo=prompt('Enter chislo');
stepen=prompt('Enter stepen');

function pow(a,n){
 var result=1;
 var resultOtr=1;
 if(n>0){
	for(var i=n;i>0;i--)
	{
		result=result*a;
	}
	return(result);
}

if(n==0){
	return 1;
}

if(n<0){
	n=n*(-1);
	for(var i=0;i<=n;i++)
	{
		result=result*10;
		console.log(result);
	}

    resultOtr=a/result;

	return(resultOtr);
}


}



 console.log(pow(chislo,stepen));