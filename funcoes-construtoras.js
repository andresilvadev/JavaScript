var Carro = function(nome, placa, fabricante){

	this.nome = nome;
	this.placa = placa;
	this.fabricante = fabricante;
}


var fox = new Carro('Fox', 'AAA-1111', 'VW');
console.log('fox', fox);