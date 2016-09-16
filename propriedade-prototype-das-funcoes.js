var Carro = function(nome, placa, fabricante){
	this.nome = nome;
	this.placa = placa;
	//this.fabricante = fabricante;
}


Carro.prototype.fabricante = 'VW';
Carro.prototype.ligar = function(){
	console.log('Ligando o carro...');
}


var fox = new Carro('Fox', 'AAA-1111','VW');
console.log('fox', fox);

var gol = new Carro('Gol', 'BBB-2222', 'VW');
console.log('gol', gol);


console.log('fox.fabricante', fox.fabricante);
console.log('gol.fabricante', gol.fabricante);