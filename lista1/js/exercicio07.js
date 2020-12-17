
function carro()
{
    var numcar=document.getElementById("entrada1").value;
    var totalven=document.getElementById("entrada2").value;
    var salfix=document.getElementById("entrada3").value;
    var valorcarro=document.getElementById("entrada4").value;

    numcar=parseInt(numcar);
    totalven=parseFloat(totalven);
    salfix=parseFloat(salfix);
    valorcarro=parseFloat(valorcarro);

    var resultado=calculasal(numcar,totalven,salfix,valorcarro);
    alert("O salário final é " + resultado);
}

function calculasal(numcar,totalven,salfix,valorcarro)
{
    var soma1=valorcarro*numcar;
    var soma2=(totalven*0.05);
    var salario_final=salfix+soma1+soma2;
    return salario_final;
}