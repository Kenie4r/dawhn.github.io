//Elemento con la capa de ayuda a mostrar en los campos de formulario
var textoAyuda;
//Matriz con los mensajes de ayuda asociados a cada control de formulario
var arregloAyuda = [
"Ingrese su nombre en este campo de texto",
"Ingrese su apellido en este campo de texto",
"Ingrese su dirección de correo en el formato usuario@dominio.com",
"Ingrese su número de teléfono en el formato 9999-0000",
"Ingrese una descripción breve en el campo área de texto",
"Seleccione su profesión en este campo select",
"Díganos cuál es su país de origen en este campo select",
"Restablezca el formulario con este botón",
"Envíe el formulario con este botón",
""
];
//Inicializar el elemento textoAyudaDiv y registrar los manejadores de eventos
//para los distintos controles de formulario
function inic(){
textoAyuda = document.getElementById("textoAyuda");
//Registrar los escuchadores de eventos
registrarEscuchas(document.getElementById("firstname"), 0);
registrarEscuchas(document.getElementById("lastname"), 1);
registrarEscuchas(document.getElementById("email"), 2);
registrarEscuchas(document.getElementById("phone"), 3);
registrarEscuchas(document.getElementById("describe"), 4);
registrarEscuchas(document.getElementById("profesion"), 5);
registrarEscuchas(document.getElementById("selpais"), 6);
registrarEscuchas(document.getElementById("resetbtn"), 7);
registrarEscuchas(document.getElementById("submitbtn"), 8);
}
//Función que determina qué mensaje de ayuda habilitar
//con base en el numeroMensaje enviado como segundo argumento
function registrarEscuchas(objeto, numeroMensaje){
//Asociar el manejador de eventos onfocus dependiendo
//del objeto y numeroMensaje recibidos como argumentos
objeto.addEventListener("focus", function(){
textoAyuda.style.visibility = "visible";
textoAyuda.innerHTML = arregloAyuda[numeroMensaje];
}, false);
objeto.addEventListener("blur", function(){
textoAyuda.style.visibility = "hidden";
textoAyuda.innerHTML = arregloAyuda[9];
}, false);
}
//Desencadenando la función inic al cargar el documento
window.addEventListener("load", inic, false);