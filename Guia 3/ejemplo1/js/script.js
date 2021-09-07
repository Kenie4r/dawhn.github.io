function iniciar(){
    //Definir objetos sobre los que se escucharán eventos
    //y asociar los eventos correspondientes
    //Primera caja de texto
    var textFieldFocus = document.frmEjemplo.txtfoco;
    textFieldFocus.onfocus = foco;
    //Segunda caja de texto
    var textFieldKey = document.frmEjemplo.txttecla;
    textFieldKey.onkeypress = tecla;
    //Campo select
    var selectField = document.frmEjemplo.selopciones;
    selectField.onchange = function(){
         cambioOpcion(this.options[this.selectedIndex].value);
    };
    //Primer campo checkbox
    var chkbox1 = document.getElementById("chkbox1");
    chkbox1.addEventListener("click", function(){
        activarCasilla(chkbox1, chkbox1.value);
    }, false);
    //Segundo campo checkbox
    var chkbox2 = document.getElementById("chkbox2");
    chkbox2.addEventListener("click", function(){
        activarCasilla(chkbox2, chkbox2.value);
    }, false);
    //Tercer campo checkbox
    var chkbox3 = document.getElementById("chkbox3");
    chkbox3.addEventListener("click", function(){
        activarCasilla(chkbox3, chkbox3.value);
    }, false);
    //Botón de envío del formulario
    var submitButton = document.getElementById("submitbutton");
    submitButton.addEventListener("click", function(){
        alert(pulsa());
        return false;
    }, false);
}
function foco(){
     alert("Foco en la primera Caja");
     this.focus();
}

function tecla(){
    alert("Pulsaste una tecla");
    this.focus();
}
function cambioOpcion(nuevaOpcion){
    alert("Has cambiado a la opción " + nuevaOpcion);
}
function activarCasilla(casilla, valorCasilla){
    var accion;
    //alert(casilla.checked);
    (casilla.checked) ? accion = " activado" : accion = " desactivado";
    alert("Se ha" + accion + " la casilla " + casilla.id + " con la opción " +
    valorCasilla);
}
function pulsa(){
    return "Materia: Desarrollo de Aplicaciones Web con Software Interpretado " +
    "en el Cliente";
}
    //Iniciar los manejadores de eventos al cargar la página
    window.onload = iniciar;

