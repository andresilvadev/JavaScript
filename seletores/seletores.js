$(function(){

	//Pega o valor pelo id selecao-todos-usuarios
	var selecaoTodosUsuarios = $('#selecao-todos-usuarios'); 
	
	//Pega o valor selecionado em cada linha usuário
	var selecaoUsuario = $('.js-selecao-usuario'); 
 	
 	//Quando o usuário for selecionado, dispara está função
	selecaoUsuario.on('click', function(){  

		//Total Usuarios Selecionados vai receber o total que estiverem em checked
		var totalUsuariosSelecionados = selecaoUsuario.filter(':checked').length;

		//Se a quantidade de seleção de usuários for igual ao total de usuarios selecionados
		var checked = selecaoUsuario.length === totalUsuariosSelecionados;

		//Selecao Todos Usuarios vai receber a propriedade checked
		selecaoTodosUsuarios.prop('checked', checked)		;

	});

	//Quando Selecao Todos Usuarios for selecionado
	selecaoTodosUsuarios.on('click', function(){

		//Pega a Selecao Usuario e seta a propriedade checked, com true ou false
		//baseado no clicl de Selecao Todos Usuarios
		selecaoUsuario.prop('checked', selecaoTodosUsuarios.prop('checked'));

	});

});