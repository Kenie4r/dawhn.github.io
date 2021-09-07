//Inicializar variables
var area, peri, coorx, coory;
//Solicitar el valor para el radio del círculo
var radio = parseInt(prompt('Ingrese un numero',''));
document.write("<header>");
document.write("<h1>Área del círculo</h1>");
document.write("</header>");
document.write("<section>");
document.write("<article>");
/* document.write("<div id=\"ballWrapper\">");
document.write("<div id=\"ball\"></div>");
document.write("<div id=\"ballShadow\"></div>");
document.write("</div>"); */
document.write("<div id=\"circle\">");
document.write("</div>");
document.write("<p>");
//Recorrer propiedades del objeto Math usando la instrucción with
with(Math){
//Área de un círculo de radio "radio"
area = PI*radio*radio;
//Valor del lado horizontal definido por el radio
coorx = abs(radio*cos(PI/4));
//Valor del lado vertical definido por el radio
coory = abs(radio*sin(PI/4));
pericir = 2*PI*radio;
perirec = 2*coorx + 2*coory;
//Invocar la propiedad write del objeto documento con with
with(document){
write("El área es: " + area);
write("<br>El lado x del rectángulo generado es: " + coorx);
write("<br>El lado y del rectángulo generado es: " + coory);
write("<br>El perímetro del circulo es: " + pericir);
write("<br>El perímetro del rectángulo es: " + perirec);
}
}
document.write("</p>");
document.write("</article>");
document.write("</section>");