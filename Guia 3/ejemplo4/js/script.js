// Mostrar la tecla presionada. En una aplicación real no debería hacerlo.
// Probablemente sería buena idea mostrar únicamente en el caso que
// se ingresen teclas que no sean números.
function showChar(e){
    var code;
    if (!e) var e = window.event;
        if (e.keyCode) code = e.keyCode; //Todos los navegadores menos Netscape 4.0 o inferior
        else if (e.which) code = e.which; //Netscape 4.0 o inferior
    var character = String.fromCharCode(code);
    //alert('La tecla presionada fue: ' + character);
    }
    // Dejar pasar únicamente números enteros y bloquear cualquier otra caracter
    function numbersOnly(field, event){
        /*alert(field.value);*/
        var key, keychar;
        showChar(event); //Mostrar la tecla presionada
        if(window.event) //Todos los navegadores menos Netscape 4.0 o inferior
            key = window.event.keyCode;
        else if(event) //Netscape 4.0 o inferior
            key = event.which;
        else
            return true;
        keychar = String.fromCharCode(key);
        // Comprobar caracteres especiales como espacio en blanco
        // luego comprobar números
        if((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 13) || (key ==27))
            return true;
        else if((("0123456789").indexOf(keychar) > -1)){
            window.status = "";
            return true;
        }
        else{
            window.status = "Este campo solo acepta números";
            return false;
        }
    }