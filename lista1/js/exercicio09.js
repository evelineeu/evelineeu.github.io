function notas()
{
    var n1=document.getElementById("entrada1").value;
    var n2=document.getElementById("entrada2").value;
    var n3=document.getElementById("entrada3").value;

    n1=parseFloat(n1);
    n2=parseFloat(n2);
    n3=parseFloat(n3);

    var resultado=media(n1,n2,n3);
    alert("A média é " + resultado);
}

function media(n1,n2,n3)
{
    var media_final=((n1*2)+(n2*3)+(n3*5))/10;
    return media_final;
}