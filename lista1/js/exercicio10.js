function macas()
{
    var quantidade=document.getElementById("entrada").value;

    quantidade=parseInt(quantidade);

    var resultado=calcula_maca(quantidade);
    alert("O total é " + resultado + " reais");
}

function calcula_maca(quantidade)
{
    var preco;
    if(quantidade<12)
    {
        preco=1.30*quantidade;
    }
    else
    {
        preco=1.00*quantidade;
    }
    return preco;
}