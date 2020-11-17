function chamaFuncao(){
	var n1 = document.getElementById("entrada1").value;
	var n2 = document.getElementById("entrada2").value;

	n1 = parseInt(n1);
	n2 = parseInt(n2);
	
	var result = Hipotenuza(n1, n2);
    alert(result)
}


function Hipotenuza (n1, n2)
{

    var resultado=0;
    resultado = Math.pow(n1,2) + Math.pow(n2,2)
    return Math.sqrt(resultado);

}