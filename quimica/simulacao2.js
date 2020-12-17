function agua()
{
	var grama_h2 =2; 
	var grama_O2 =32;
	var grama_H2O =18;
	var valor = document.getElementById("valor").value;
	valor =  parseFloat(valor);
	var reagente = document.getElementById("reagente").value;
	var reagente2 = document.getElementById("reagente2").value;
	var relacao = document.getElementById("relacao").value;
	var resultado = "";
	if(reagente == "H2O" && reagente2 == "H2")
	{
		var conta1 = valor * grama_h2;
		var result=  conta1 / 1; 
		
		resultado = valor + " mol-H2 - xgH2O" + " <br> 1mol-H2 - 18gH2O" +  
		"<br> <br> " + valor + " gH2O * 1mol-H2" + " <br> XgH2O * mol-H2 <br> <br> O resultado é: " + valor + " mol-H2 - " + result + " gH2O" ;
		document.getElementById("conta").innerHTML = resultado;
	}

	if(reagente == "H2" && reagente2 == "H2O")
	{
		var conta1 = valor * grama_H2O;
		var result=  conta1 / 1; 
		
		resultado = valor + " mol-H2 - xgH2O" + " <br> 1mol-H2O - 18gH2O" +  
		"<br> <br> " + valor + " mH2 * 18gH2O" + " <br> 1mol-H2 * XgH2O <br> <br> O resultado é: " + valor + " gH2O - " + result + " gH2" ;
		document.getElementById("conta").innerHTML = resultado;
	}

	if(reagente == "H2O" && reagente2 == "H2O")
	{
		resultado = "Entrada inválidada selecionar as correlações H2O - H2 , H2G - H2OG ";
		document.getElementById("conta").innerHTML = resultado;
	}

	

	


}