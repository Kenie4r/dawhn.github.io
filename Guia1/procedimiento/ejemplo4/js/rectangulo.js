/* * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: rectangulo.js *
* Uso: Calcular el área de un rectángulo. *
* * * * * * * * * * * * * * * * * * * * * * * * * * */
var base = prompt('Introduzca la base del rectángulo','');
var altura = prompt('Introduzca la altura del rectángulo','');
var area;
area = base*altura
document.write("<header><h1>El área del rectángulo es: " + area + "</h1><hr /><br/></header>");