window.onload = Init;
function Init(){
    
    var temp = prompt("Ingrese la temperatura en celcius");
    if(temp == ""){
        alert("No has ingresado ningún número vuelve a intentarlo");
        Init()
    }else{
        if(!(isNaN(temp)== false)){
            alert("Los datos ingresados son incorrecto vulve a intentar");
            Init()
        }else{
            total = (temp * (9/5))+32;
        }

    }
    document.getElementById("temp").innerHTML = total + "F°";
}