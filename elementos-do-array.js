var acessorio = {
	som: 'Pionner',
	banco: 'Couro',
	roda: 'Esportiva'
}

var ligar = function(){
	console.log('Ligando o carro...');
}


var carro = [
	'Fox',
	 4,
	 acessorio,
	 ligar
];
console.log(carro); //Mostrando array de carros

console.log(carro[2].som); //Acessando o objeto da posição 2, no array carro

carro[3](); //Executando a função ligar