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

console.log('Cidade onde a pessoa mora:', pessoa.endereco.cidade);

console.log('Estado onde a pessoa mora:', pessoa['endereco']['estado']);