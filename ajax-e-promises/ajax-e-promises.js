$(function(){

	var resposta = $.ajax({
		url: 'http://localhost:8080/estados',
		method: 'GET',
		dataType: 'jsonp', //Somente por que não estamos no mesmo domínio
	});

	resposta.done(function(estados){

		estados.forEach( function(estado) {
			
			console.log('estado');

		});

	});

	resposta.fail(function(){

		alert('Erro ao carregar dados do servidor!');

	});

});