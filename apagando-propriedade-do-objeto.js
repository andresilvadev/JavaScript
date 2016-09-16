var pessoa = {
	nome: 'Andre Silva',
	idade: '32',
	endereco: {
		logradouro: 'Av Brasil',
		numero: '2049',
		complemento: 'Casa Azul',
		cidade: 'Ponta Grossa'	,
		estado: 'Parana'
	}
}

console.log(pessoa);

delete pessoa.idade;
console.log('->', pessoa);


delete pessoa['endereco'].estado;
console.log('-->', pessoa);