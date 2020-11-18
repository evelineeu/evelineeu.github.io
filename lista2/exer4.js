function experiencia()
{
	var n1 = document.getElementById("entrada1").value;
	n1 = parseInt(n1);
	if(n1>=0 && n1<2)
		alert ("Iniciante");
	else if(n1>1 && n1<=3)
		alert ("Intermediário");
	else if(n1>3 && n1<=6)
		alert ("Avançado");	
	else if(n1>=7)
		alert ("Jedi master");
	else if(n1<0)
		alert ("Número invalido");
}



