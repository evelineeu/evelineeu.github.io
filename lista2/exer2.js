
function pares()
{
	var n1 = document.getElementById("entrada1").value;
	var n2 = document.getElementById("entrada2").value;
	n1 = parseInt(n1);
	n2= parseInt(n2);

	var a= 0;
	var b= 0;
	var texto ="Os números pares são:"
	if(n1<n2)
	{
		a = n1;
		b = n2;
	}

	else
	{
		b = n1;
		a = n2;
	}
		
	for(a;a<=b;a++)
	{
		if(a%2==0)
			texto+= a+ ",";
	}
	
	alert (texto);
}
