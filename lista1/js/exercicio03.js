function chamaFuncao(){
	var n1 = document.getElementById("entrada1").value;
	n1 = parseInt(n1);
	var result = primo (n1);
	alert ( result)
}

function primo(num1)
{

        if(num1>1)
        {
            var x = 0;
            for(i=1;i<=num1;i++)
            {
                if(num1%i==0) x++;
            }
            
        if(x==2) return "Primo"
        else return "Não é primo"




        }
        
        

}