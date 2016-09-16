$(function(){

	var resposta = $.ajax({
		url: 'http://localhost:8080/estados',
		method: 'GET',
		dataType: 'jsonp' //Somente por que não estamos no mesmo domínio
	});

	resposta.done(function(estados){

		var comboEstado = $('#combo-estado');
			//comboEstado.empty();
			comboEstado.html('<option> Selecione estado </option>');

		estados.forEach( function(estado) {
			
			// Var optionEstado será um elemente do tipo option com o value uf e nome do estado
			var optionEstado = $('<option>').val(estado.uf).text(estado.nome);

			//comboEstado recebe o option de estado
			comboEstado.append(optionEstado);

		});

	});

	resposta.fail(function(){

		alert('Erro ao carregar dados do servidor!');

	});

});