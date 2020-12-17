function chamaFuncao(){
	var f = document.getElementById("entrada1").value;

	f = parseInt(f);

	
	var resultado = celcius(f);
	alert( resultado);
}

function celcius(f){
    var result= ((f - 32)/ 9) * 5                                   
    return result;

}
