//Validación de un inicio de sesion en Firebase con la finalidad de realizar cualquier inicio de sesion ya sea en Facebook o Google como 
//Tambien en validacion de Email & Contraseña del mismo.
window.onload = inicializar;
var formAutenticacion;

function inicializar(){
	formAutenticacion = document.getElementById("form-autenticacion");
	formAutenticacion.addEventListener("submit", autentificar, false);
}
function autentificar(event){
	event.preventDefault();
	var usuario = event.target.email.value;
	var contrasena = event.target.password.value;

	firebase.auth(conexion1).signInWithEmailAndPassword(usuario, contrasena)
		.then(function(result){
			window.location.href ="index.html";
		})
		.catch(function(error) {
		  // Handle Errors here.
		  $("#myModal").modal();
		});
}

