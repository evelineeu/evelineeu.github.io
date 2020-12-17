
//Evellyn Ortega- 2° ano
function questaoNomes ()
{
	var nomes = ["Diego", "Gabriel", "Lucas"];
    var elemento = document.createElement('ul');
	elemento.style.display = 'inline-block';
	for (i of nomes)  
	{
      var acrescentarli = document.createElement('li');
      var texto = document.createTextNode(i);

      acrescentarli.appendChild(texto);
      elemento.appendChild(acrescentarli);
	}

	var resultado = document.getElementById('teste2');
	resultado.appendChild(elemento);


}

var nomes_array = ["Diego", "Gabriel", "Lucas"];


function adicionaNomes ()
{
	var quarto_elemento = document.getElementById('teste3');
	var valorinput = document.getElementById('text').value;
	for (i of nomes_array) 
	{
      var acrescentarnalista = document.createElement('li');
      var texto = document.createTextNode(i);

	  acrescentarnalista.appendChild(texto);
	  quarto_elemento.appendChild(acrescentarnalista);
	}

	var acrescentarnalista = document.createElement('li');
	var texto = document.createTextNode(valorinput);

	acrescentarnalista.appendChild(texto);
	quarto_elemento.appendChild(acrescentarnalista);

nomes_array.splice(0,3);
}