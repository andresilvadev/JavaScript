$(function(){

	//Pega o valor pelo id selecao-todos-usuarios
	var selecaoTodosUsuarios = $('#selecao-todos-usuarios'); 
	
	//Pega o valor selecionado em cada linha usuário
	var selecaoUsuarios = $('.js-selecao-usuario'); 


	function estilizarLinhaUsuarios(){

		//Filtrando os elementos checkados e adicionando classe css selecionado
		selecaoUsuarios.filter(':checked').parents('tr').addClass('selecionado');
		//Filtrando os elementos que não estiverem checkados, e removendo a classe css selecionado
		selecaoUsuarios.filter(':not(:checked)').parents('tr').removeClass('selecionado');
	}

 	
 	//Quando o usuário for selecionado, dispara está função
	selecaoUsuarios.on('click', function(){  

		//Total Usuarios Selecionados vai receber o total que estiverem em checked
		var totalUsuariosSelecionados = selecaoUsuarios.filter(':checked').length;

		//Se a quantidade de seleção de usuários for igual ao total de usuarios selecionados
		var checked = selecaoUsuarios.length === totalUsuariosSelecionados;

		//Selecao Todos Usuarios vai receber a propriedade checked
		selecaoTodosUsuarios.prop('checked', checked);

	});

	//Quando Selecao Todos Usuarios for selecionado
	selecaoTodosUsuarios.on('click', function(){

		//Pega a Selecao Usuario e seta a propriedade checked, com true ou false
		//baseado no clicl de Selecao Todos Usuarios
		selecaoUsuarios.prop('checked', selecaoTodosUsuarios.prop('checked'));

		/*
		if (selecaoTodosUsuarios.prop('checked')){

			selecaoUsuarios.parents('tr').addClass('selecionado');

		}else{

			selecaoUsuarios.parents('tr').removeClass('selecionado');
		}
		*/
		
		//Chamando a função para estilizar a linha quando checked
		estilizarLinhaUsuarios();
	});


	// Quando mudar executa a função pegando o evento
	selecaoUsuarios.on('change', function(event){
		/*
		var selecaoUsuario = $(event.target);
		
		if(selecaoUsuario.prop('checked')){

			selecaoUsuario.parents('tr').addClass('selecionado');	

		}else{

			selecaoUsuario.parents('tr').removeClass('selecionado');
		}		
		*/
		estilizarLinhaUsuarios();
	});

});