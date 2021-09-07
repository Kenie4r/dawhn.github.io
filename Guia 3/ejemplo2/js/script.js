//Iniciando el manejador para los enlaces de la página.
window.onload = confirmAllLinks;
//Controlador de eventos para elementos de enlace y area en mapas.
//Utiliza la palabra clave this para hacer referencia al elemento
//del documento y puede devolver false para evitar que
//el navegador vaya al vínculo.
function confirmLink(){
    return confirm("¿Está seguro que quiere visitar el sitio: " + this.href
    + "?");
}
//Recorrer todos los enlaces (hipervínculos) del documento y asignar
//la función confirmLink a cada uno como controlador controlador de evento.
function confirmAllLinks(){
    for(var i=0; i<document.links.length; i++){
        document.links[i].onclick = confirmLink;
    }
}