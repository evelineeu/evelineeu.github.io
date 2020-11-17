function chamaFuncao(){
	var salario = document.getElementById("entrada1").value;
	var percentual = document.getElementById("entrada2").value;

	salario = parseFloat(salario);
	percentual = parseFloat(percentual);
    
    var result = Reajuste(salario, percentual);
	alert( result);
}

function Reajuste (sal, per){
        


    per = per/100;
    return sal + (sal * per ) 
}