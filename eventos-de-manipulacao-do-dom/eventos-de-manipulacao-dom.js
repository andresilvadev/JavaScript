$(function(){

	$('#botao1').on('click', function(event){
		console.log('Botão 1 Clicado');		
	});


	$('#link1').on('click', function(event){		
		event.preventDefault();
		console.log('Link 1 Clidado');
	});


	$('#input1').on('keyup', function(event){
		if(event.keyCode === 13){
			alert('Enter pressionado!');
		}
	});

});