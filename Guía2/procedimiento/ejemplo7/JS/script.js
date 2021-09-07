function iniciar(){
    //Elementos de la página sobre los que se detectarán eventos
    var selcountry = document.getElementById('country');
    var addcity = document.getElementById('btnagregar');
    //Creando un arreglo para guardar las ciudades de cada país
    var cities = new Array(4);
    cities["Italia"] = ["Roma", "Turín", "Milán", "Venecia", "Verona"];
    cities["Francia"] = ["Paris", "Lion", "Niza", "Mónaco"];
    cities["España"] = ["Madrid", "Barcelona", "Valencia", "Sevilla"];
    cities["Estados Unidos"] = ["Washington", "Florida", "San Francisco", "New York",
    "Houston"];
    //Asociando el manejador de evento click al elemento select country
    selcountry.onclick = function(){
    this.className = this.options[this.selectedIndex].className;
    }
    selcountry.onchange = function(){
    addOptions(cities[this.options[this.selectedIndex].text], document.testform.city);
    }
    //Asociando el manejador de evento click
    addcity.onclick = function(){
    addCity(cities[document.testform.country.options[document.testform.country.selectedIndex].
    text], document.testform.city)
    }
    }
    //Esta función limpia todas las opciones del menú desplegable de las ciudades
    function removeOptions(optionMenu){
    for(i=0; i<optionMenu.options.length; i++){
    optionMenu.options[i] = null;
    }
    }
    //Esta función agrega nuevas opciones en el menú desplegable
    //de las ciudades, dependiendo del país seleccionados.
    //Las ciudades para llenar el campo son tomadas del
    //array asociativo correspondiete
    function addOptions(optionList, optionMenu){
    var i=0;
    //Limpia las opciones
    removeOptions(optionMenu);
    for(i=0; i<optionList.length; i++){
    optionMenu[i] = new Option(optionList[i], optionList[i]);
    }
    }
    //Permite agregar dinámicamente una ciudad al país actual
    function addCity(optionList, optionMenu){
    var newcity;
    do{
    newcity = prompt("Ingrese la ciudad que desea agregar:","");
    }while(newcity == null || newcity == undefined || newcity.length == 0);
    optionList.push(newcity);
    removeOptions(optionMenu);
    addOptions(optionList, optionMenu);
    }
    window.onload = iniciar;