function chamaFuncao(){
	var n1 = document.getElementById("entrada1").value;
	var n2 = document.getElementById("entrada2").value;

	n1 = parseInt(n1);
	n2 = parseInt(n2);
	
	var result = Maior (n1, n2);
	alert( result);
}

function Maior(num1, num2){
        if(num1>num2)
            return num1
        if(num1<num2)
            return num2
        if(num1==num2)
            return "Os números são iguais"

}