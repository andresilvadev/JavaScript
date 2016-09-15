var temFoto = true;
// se tem foto: perfil.jpg
// se não tem foto: mock-perfil.jpg
// <img src="pathFoto">

var pathFoto = '';

if(temFoto){

	pathFoto = 'andre-perfil.jpg';

}else{

	pathFoto = 'mock-perfil.jpg;'
}

console.log('path da foto', pathFoto);


///////////////////////////////////////
//----------OPERADOR TERNÁRIO--------//
///////////////////////////////////////

var hasPhoto = false;

var pathPhoto = hasPhoto ? 'andre-perfil.jpg' : 'mock-perfil.jpg';

console.log('path da foto', pathPhoto);