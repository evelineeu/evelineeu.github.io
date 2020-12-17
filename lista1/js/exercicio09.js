function chamaFuncao(){
    var n1 = document.getElementById("entrada1").value;
    var n2 = document.getElementById("entrada1").value;
	var n3 = document.getElementById("entrada1").value;


    n1 = parseInt(n1);
    n2 = parseInt(n2);
    n3 = parseInt(n3);

	var result = nota (n1, n2, n3);
	alert ( result)
}

function nota(nota1, nota2, nota2)
{
    return ((nota1 * 2) + ( nota2 * 3) + (nota3 * 5)) / 10
        
        

}