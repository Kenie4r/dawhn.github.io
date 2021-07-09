function init(){
    //prompt() permite obtener entrada de datos del usuario
    var presupuesto = prompt('Ingrese el presupuesto anual','');
    var derma, trau, pedi, i;
    var div = document.getElementById('distribucion');
    
    //Realizando los cálculos para distribución del presupuesto
    derma = presupuesto*0.40;
    trauma = presupuesto*0.35;
    pedia = presupuesto*0.25;
    
    //Creando el código que se insertará dentro del elemento div id=distribucion
    var html = "<ul>\n\t<li>\n";
    html += "\t\t<a href='#' class='move-right'>\n";
    html += "\t\t\tEl presupuesto asignado para Ginecología es: $ " + derma + "\n";
    html += "\t\t</a>\n"; 
    html += "\t</li>\n";
    html += "\t<li>\n";
    html += "\t\t<a href='#' class='move-right'>\n";
    html += "\t\t\tEl presupuesto asignado para Traumatología es: $ " + trauma + "\n";
    html += "\t\t</a>\n";
    html += "\t</li>\n";
    html += "\t<li>\n";
    html += "\t\t<a href='#' class='move-right'>\n";
    html += "\tEl presupuesto asignado para Pediatría es: $ " + pedia + "\n";
    html += "\t\t</a>\n";
    html += "\t</li>\n";
    html += "</ul>\n";
    //Insertando dentro del elemento div el código asignado en la variable html
    div.innerHTML = html;
    //Hacer referencia a los elementos h1 dentro de la página web
    var links = document.getElementsByTagName('a');
    //Recorrer todos los elementos a y asignar el manejador de evento
    //mediante una función anónima
    for(i=0; i<links.length; i++){
    links[i].onmouseover = function(){
    this.className = 'move-right-hover';
    };
    links[i].onmouseout = function(){
    this.className = 'move-right';
    };
    }
   }
   window.onload = init;