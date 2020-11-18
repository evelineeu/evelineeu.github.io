
function usuarios()
{
var usuarios = 
[
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

    var diego = 
    {
        nome: "",
        habilidades: [""]
    };
    var gabriel = 
    {
        nome: "",
        habilidades: [""]
    };
    diego=usuarios[0];
    gabriel=usuarios[1];
	var diego_text="O " + diego.nome + " possui as habilidades: " + diego.habilidades;
	var gabriel_text = " O " + gabriel.nome + " possui as habilidades: " + gabriel.habilidades + ".";
	document.getElementById("msg1").innerHTML = diego_text;
	document.getElementById("msg2").innerHTML = gabriel_text;
}

