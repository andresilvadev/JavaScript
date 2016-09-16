var criarCarro = function(nome, placa, fabricante){
	return {
		nome: nome,
		placa: placa,
		fabricante: fabricante,
	};
}


var fox = criarCarro('Fox', 'AAA-1111', 'VW');
console.log('fox', fox);