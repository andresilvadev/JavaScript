var nome = 'Andre Silva'; //váriavel global

function capitalizar(){
	//nome é uma variavel local à função capitalizar
	var nome = 'Andre Luiz'.toUpperCase();
}

capitalizar();
console.log('Nome:', nome);





function capitalizar2(){
	//se não por o var ela se torna uma global
	nome = 'Andre Luiz da Silva'.toUpperCase();
}

capitalizar2();
console.log('nome2', nome);