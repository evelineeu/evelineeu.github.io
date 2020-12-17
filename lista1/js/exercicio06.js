function chamaFuncao(){
	var n1 = document.getElementById("entrada1").value;

	n1 = parseFloat(salario);
    
    var result = Carro(n1);
	alert( result);
}

function Carro (num1){
        

    var distribuidora= 0.28; var imposto=0.45;
    return num1 + (num1 * distribuidora) + ( num1 * imposto);
}