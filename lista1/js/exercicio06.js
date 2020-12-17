function custoFinal()
{
    var custofab=document.getElementById("entrada").value;

    custofab=parseFloat(custofab);

    var result=calcpreco(custofab);
    alert("O preço final do carro é " + result);

}

function calcpreco(custofab)
{
    r=custofab*(0.73);
    result=custofab+r;
    return result;
}