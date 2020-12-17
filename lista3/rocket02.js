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

//Evellyn Ortega- 2° ano
function quadradosColoridos()
{
	var quadrados = document.createElement('div');
	quadrados.style.width = '100px';
	quadrados.style.height = '100px';
	quadrados.style.backgroundColor = '#FF0000';
	quadrados.style.marginBottom = '1px'
	quadrados.style.display = 'inline-block';
	var resultado = document.getElementById('teste');
	quadrados.onmouseover = function() {
        quadrados.style.backgroundColor = getRandomColor();
      } 
	resultado.appendChild(quadrados);
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
