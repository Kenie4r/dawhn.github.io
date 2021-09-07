//Declarar variables e inicializarlas, si es conveniente
var propiedad, str="";
var cantidad = 0;
str += "<header id=\"three-d\">";
str += "<h1>Propiedades del objeto navigator</h1>";
str += "</header>";
str += "<section>";
str += "<article>";
str += "<table class=\"tab-x\" summary=\"Propiedades del navegador\">";
str += "<thead>";
str += "<tr><th>Propiedad</th><th>Valor</th></tr>";
str += "</thead>";
str += "<tbody>";
for(propiedad in navigator){
str += "<tr>";
str += "<td>" + propiedad + " </td><td> " + navigator[propiedad] + "</td>";
str += "</tr>";
cantidad++;
}
str += "</tbody>";
str += "<tfoot>";
str += "<th colspan=\"2\">";
str += "Total:" + cantidad + " propiedades";
str += "</th>";
str += "</tfoot>";
str + "</table>";
str += "</article>";
str += "</section>";
document.write(str);
