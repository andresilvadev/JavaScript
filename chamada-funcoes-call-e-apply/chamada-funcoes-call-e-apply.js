function Carro(nome, placa){
	this.nome = nome;
	this.placa = placa;
}


var fox = {};


var gol = {};

Carro.call(fox, 'Fox', 'AAA-1111');
console.log('fox', fox);



Carro.apply(gol, ['Gol', 'BBB-2222']);
console.log('fox', fox);