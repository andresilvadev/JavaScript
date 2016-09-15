//Inicialização, Comparação e Incremento
for (var i = 0; i < 5;  i ++){
	console.log('O valor de i é:', i);
}


var nome = 'André Silva';
for (var j = 0;  j < nome.length; j ++){
	console.log('O valor de j é:', j);
}


var k = 5;
for(; k < 9; k ++){
	console.log('O valor de k é:', k);
}


var z = 5;
for(;z < 4;){
	console.log('z', z);
}


// loop infinito
var l = 0;
for(;;){
	console.log('->', l ++);

	// sai do loop infinito quando chegar em mil.
	if(l === 1000){
		break;
	}
}
