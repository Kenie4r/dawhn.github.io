function calcular(conversion){
    var total = 0;
    var metros = prompt("Ingrese los metros a convertir a "+conversion+  ":");
    if(conversion == "pulgadas"){
        if(!(isNaN(metros)==false)){
            alert("Los metros ingresados son incorrectos vuelve a intentarlo");
            calcular(conversion);
        }else{
            total = (metros)*39.37;
           
        }
    }else if(conversion == "yardas"){
        if(!(isNaN(metros)==false)){
            alert("Los metros ingresados son incorrectos vuelve a intentarlo");
            calcular(conversion);
        }else{
            total = (metros)*1.094;
        }
    }else if(conversion == "pies"){
        if(!(isNaN(metros)==false)){
            alert("Los metros ingresados son incorrectos vuelve a intentarlo");
            calcular(conversion);
        }else{
            total = (metros)*3.281;
        }
    }else{
        alert("ERROR, HUBO UN ERROR EN EL PROGRAMA PORFAVOR REINICIAR");
        return 0;
    }
    document.getElementById('Resultado').innerHTML= total + " "+ conversion;
}

