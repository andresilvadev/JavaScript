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


for (var prop in pessoa){
	console.log(prop, pessoa[prop]);

	if(prop === 'idade'){
		console.log('Achei idade');
	}
}