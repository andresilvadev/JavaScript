$(function(){

	var atividade = $('#atividade');
	var listaAtividades = $('#lista-atividades');

	atividade.on('keyup', function(event){

		var keyCode = event.keyCode;

		if(keyCode === 13){

			//Disparar o evento
			atividade.trigger('enter', atividade.val());
			atividade.val('');
		}
	});

	atividade.on('enter', function(evento, texto){
		listaAtividades.append('<li>' + texto + '</li>');
	});

	atividade.on('enter', function(evento, texto){
		console.log('Outra funcionalidade aqui');
	});

});