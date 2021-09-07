//declaración de variables
var i, num, nota, notaacumuladoa, promedio;

//captura la cantidad de las notas que se ingresrarán
num = parseInt(prompt("¿Cuántas notas quieres ingresar?", ""));

//Definiendo un valor de inicio 
nota = 0;
header = "<header class='masked'><h1>Selectable Text</h1></header>"
document.write(header);

//ciclo o lazo que permitra ingresar cada una de las notas
document.write("<section>");
document.write("<article>");
for ( i= 1; i<=num;i++){
    notaactual = parseFloat(prompt("Ingrese la nota "+i+" : ", ""));
    document.write("<h3>La nota " + i + ": " + Math.round(notaactual * Math.pow(10,2)) /
    Math.pow(10,2) + "</h3>");
    nota += notaactual;
}
//Obteniendo el cálculo del promedio
promedio = nota / (i-1);
//Imprimir el valor redondeado a dos decimales del promedio
document.write("<h3>El promedio de las notas es: " + Math.round(promedio * Math.pow(10,2))
/ Math.pow(10,2) + "</h3>");
document.write("</article>");
document.write("</section>");