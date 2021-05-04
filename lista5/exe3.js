$(function(){

    $("#botao").click(function(){
        let texto_array = $("#texto_array").val();
        texto_array = texto_array.replace(/\s+/g, '');
        let array = texto_array.split(",");
        let tam = array.length;
        if(array[tam-1] == "")
        {
            array.pop();
        }
        $("#resultado").html("<br>Duplicado: " + duplicado(array)
         + "<br> Pares: " + par(array) + "<br> Soma: " + soma(array));
    })

    $("#limpar").click(function(){
        $("#resultado").text("");
        $("#texto_array").val("");
    })

    function duplicado (vetor)
    {
        let x = vetor.map(function(num)
        {
            return num*2;
        })
        return x;
    }

    function par (vetor)
    {
        let x = vetor.filter(function(num)
        {
            return num%2==0;
        })
        if(x == "")
        {
            return "Não existem valores pares."
        }
        else
        {
            return x;
        }
    }

    function soma (vetor)
    {
        let x = vetor.reduce(function(soma, num)
        {
            return parseInt(soma) + parseInt(num);
        });
        return x;
    }

})