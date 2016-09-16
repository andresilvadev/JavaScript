var nomes = [
	'João',
	'Pedro',
	'Maria',
	'José'
];

for (var i = 0; i < nomes.length; i++){
	console.log('nomes[', i,']=', nomes[i]);
}


//Melhor maneira de fazer isso
nomes.forEach(function(element){
	console.log(element);
});