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
	

	if(reagente == "H2O" && reagente2 == "H2O")
	{
		resultado = "Entrada inválidada selecionar as correlações H2O - O2 , O2 - H2O ";
		document.getElementById("conta").innerHTML = resultado;
	}

	if(reagente == "O2" && reagente2 == "H2O")
	{
		var conta1 = valor * grama_H2O;
		var result=  conta1 / 0.5; 
		
		resultado = valor + " mol-O2 - xgH2O" + " <br> 0.5mol-O2 - 18gH2O" +  
		"<br> <br> " + valor + " mO2 * 18gH2O" + " <br> 0.5mol-O2 * XgH2O <br> <br> O resultado é: " + valor + " mol-O2 - " + result + " gH2O" ;
		document.getElementById("conta").innerHTML = resultado;
	}

	if(reagente == "H2O" && reagente2 == "O2")
	{
		var conta1 = valor * grama_O2;
		var result=  conta1 / 0.5; 
		
		resultado = valor + " xgH2O - mol-O2" + " <br> 18gH2O - 0.5mol-O2" +  
		"<br> <br> " + valor + " mO2 * 18gH2O" + " <br> 0.5mol-O2 * XgH2O <br> <br> O resultado é: " + valor + " gH2O - " + result + " mO2" ;
		document.getElementById("conta").innerHTML = resultado;
	}

	


}
