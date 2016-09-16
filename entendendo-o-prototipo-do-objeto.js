var volks = {
	fabricante: 'VW'
}

var fox = {
	nome: 'Fox',
	placa: 'AAA-1111',
}

var gol = {
	nome: 'Gol',
	placa: 'BBB-2222',
}

console.log('fox', fox);
console.log('gol', gol);


console.log(Object.getPrototypeOf(fox) === Object.getPrototypeOf(gol));


console.log('fox.fabricante', fox.fabricante);
console.log('gol.fabricante', gol.fabricante);

Object.setPrototypeOf(fox, volks);
console.log('fox.fabricante', fox.fabricante);

console.log('toString do fox:', fox);