//Evellyn Ortega- 2° ano
function quadrado()
{
	var quadrados = document.createElement('div');
	quadrados.style.width = '100px';
	quadrados.style.height = '100px';
	quadrados.style.backgroundColor = '#FF0000';
	quadrados.style.marginBottom = '1px'
	quadrados.style.display = 'inline-block';
	var resultado = document.getElementById('teste');
	resultado.appendChild(quadrados);
}