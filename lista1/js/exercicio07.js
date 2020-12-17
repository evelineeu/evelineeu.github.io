function chamaFuncao(){
	var carven = document.getElementById("entrada1").value;
	var totalven = document.getElementById("entrada2").value;
    var salfix = document.getElementById("entrada3").value;
    var porcentagem = document.getElementById("entrada4").value;

    carven = parseFloat(carven);
	 totalven = parseFloat(totalven);
     salfix = parseFloat(salfix);
     porcentagem = parseFloat(porcentagem);

	
    var result = concessionaria(carven, totalven, salfix, porcentagem);
	alert( result);
}

function concessionaria (cv, tv, sf, pc){

    var pc1= pc/100;
    var comissao = cv* pc1;
    var totalVendas= tv * 0.05;
    return sf + comissao + totalVendas;

}