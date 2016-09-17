var estado = (function(){
	var comboEstado = $('#combo-estado');

	function iniciar(){
		$.ajax({
			url: 'http://localhost:8080/estados',
			method: 'GET',
			dataType: 'jsonp',
			success: onEstadosRetornados,
			error: onError
		});
	}

	function onEstadosRetornados(estados){
		comboEstado.html('<option> Selecione o estado </option>');

		estados.forEach( function(estado) {
			
			// Var optionEstado será um elemente do tipo option com o value uf e nome do estado
			var optionEstado = $('<option>').val(estado.uf).text(estado.nome);

			//comboEstado recebe o option de estado
			comboEstado.append(optionEstado);
		});
	}

	function onError(){
		alert('Erro ao carregar dados do servidor!');
	}

	return{
		iniciar: iniciar
	}

})();

estado.iniciar();