

function temperatura()
{
    var temperatura=document.getElementById("entrada").value;

    temperatura=parseFloat(temperatura);

    var resultado=Celsius_em_Fahrenheit(temperatura);
    alert(temperatura + "°C é " + resultado + "°F");
}

function Celsius_em_Fahrenheit(temperatura)
{
    var resultado=((9*temperatura)/5)+32;
    return resultado;
}