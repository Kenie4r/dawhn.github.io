/* * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: calculadora.js *
* Descripción: Realizar operaciones aritméticas básicas.*
* * * * * * * * * * * * * * * * * * * * * * * * * * * * */
//Función que funciona como manejador de evento
//al producirse el evento load (carga de la página)
function init() {
    //Ingresar los datos de los números a operar
    var op1 = prompt('Introduzca el primer numero:','');
    var op2 = prompt('Introduzca el segundo numero:','');
    //Elemento div donde se mostrará el menú de las operaciones
    var operaciones = document.getElementById('operaciones');
    //Elemento div donde se mostrarán los resultados
    var resultado = document.getElementById('resultado');
    //Creando el contenido de la página
    var contenido = "<header>\n";
    contenido += "\t<h1></h1>\n";
    contenido += "</header>\n";
    contenido += "<nav class='menu'>\n";
    contenido += "<ul>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Sumar</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Restar</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Multiplicar</span></a>\n";
    contenido += "</li>\n";
 contenido += "\t<li>\n";
 contenido += "\t\t<a href=\"javascript:void(0)\"><span>Dividir</span></a>\n";
 contenido += "</li>\n";
 contenido += "\t<li>\n";
 contenido += "\t\t<a href=\"javascript:void(0)\"><span>Residuo</span></a>\n";
 contenido += "</li>\n";
 contenido += "</ul>\n";
 contenido += "</nav>\n";
 //Colocar el contenido dentro del elemento div
 operaciones.innerHTML = contenido;
 //Preparando el manejo del evento click sobre los enlaces del menú
 var opciones = document.getElementsByTagName('a');
 //Recorrer todos los elementos de enlace (elementos a)
 //y asignar el manejador del evento click
 for(var i=0; i<opciones.length; i++){
 switch(i){
 case 0:
 //Función sumar
opciones[i].onclick = function(){
 resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " + " + op2 + 
" = " + (parseFloat(op1) + parseFloat(op2)) + "</p>\n";
 }
break;
 case 1:
 opciones[i].onclick = function(){
 resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " - " + op2 + 
" = " + (op1 - op2) + "</p>\n";
 }
break;
 case 2:
 opciones[i].onclick = function(){
 resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " * " + op2 + 
" = " + (op1 * op2) + "</p>\n";
 }
break;
 case 3:
 opciones[i].onclick = function(){
 if(op2 == 0){
 resultado.innerHTML = "<p class=\"letterpress\">No se puede dividir entre cero</p>";
 }
else {
 resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " / " + 
op2 + " = " + Math.round((op1 / op2) * 100) / 100 + "</p>\n";
 }
 }
 break;
 case 4:
 opciones[i].onclick = function(){
 if(op2 == 0){
 resultado.innerHTML = "<p class=\"letterpress\">No se ha podido obtener el residuo, por división entre cero.</p>\n";
 }
 else{
 resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " % " + 
op2 + " = " + (op1 % op2) + "</p>\n";
 }
 }
 break;
 }
 }
}
window.onload = init;
