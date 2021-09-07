var divResult = document.querySelector(".result");
function Data(){
    divResult.innerHTML = "";
    var html= "";
    var txtInput =  document.getElementById('txtNumber'); 
    if(isNaN(txtInput.value)){
        alert("Por favor ingrese números")
        txtInput.val = 0;
        return;
    }else{
        var imparesArray= new Array(), paresArray= new Array(), mayor, menor, sumPares = 0, sumImpares=0;
        var impar = 0, pares = 0;
        var myNumbers = Array.from(txtInput.value);
        html+= "<div class=''> La cantidad de numeros es: "+myNumbers.length+"</div>";
        for(var i = 0; i<myNumbers.length; i++){
            if(i==0){
                menor = myNumbers[i];
                mayor = myNumbers[i];
            }
            if(myNumbers[i]<menor){
               menor = myNumbers[i];
            }else if(myNumbers[i]>mayor){
                mayor = myNumbers[i];
            }
            if(parseInt(myNumbers[i])%2 == 0){
                paresArray[pares] = myNumbers;
                pares++;
            }else{
                imparesArray[impar] = myNumbers;
                impar++;
            }
        }
        for(var n = 0; n<=impar; n++){
            if(imparesArray[n]!=undefined){
                sumImpares+= parseInt(imparesArray[n]);
            }
          
        }
        for(var n = 0; n<=impar; n++){
            if(paresArray[n]!=undefined){
                sumPares+= parseInt(paresArray[n]);
        
            }
        }
        html += "<div class=''>La cantidad de numeros impares es: "+imparesArray.length+"</div>";
        html+="<div class=''>La cantidad de numeros pares es: "+paresArray.length+"</div>";
        html+="<div class=''>La Suma de numeros impares es: "+sumImpares+"</div>";
        html+="<div class=''>La Suma de numeros pares es: "+sumPares+"</div>";
        html+="<div class=''>El número mayor es es: "+mayor+" mientras que el menor es: "+menor+"</div>"
    }
    divResult.innerHTML += html;


}