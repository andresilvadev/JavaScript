//Criando objeto do tipo carro
var carro  = {
	cor: 'Prata',
	ano: '2016',
	modelo: 'Fox',
	fabricante: 'Wolkswagen'
}

console.log('carro', carro);
//////////////////////////////////////

//pintando carro
carro.cor = 'Branco';
console.log('Carro depois de pintado', carro);


console.log('Modelo', carro['modelo']);


carro.peso = 1100;
console.log('Carro descrições:', carro);


//////////////////////////////////////

carro.ligar = function(){
	console.log('Ligando o carro!');
};
console.log(carro);
carro.ligar();


/////////////////////////////////////

var celta = {
	cor : 'vermelho',
	modelo : 'celta',
	fabricante : 'GM',
	ligar: function(){
		console.log('Ligando o carro Celta');
	}
};

console.log('celta', celta);