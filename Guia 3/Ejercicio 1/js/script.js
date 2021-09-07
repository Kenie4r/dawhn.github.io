window.onload = inicio;
var numbersA = document.getElementById('actual')
var numbersF = document.getElementById('last')
var value = new Array(), temp="", total = 0, c = 0, last;

function inicio(){
    //llamar función de calculadora
    value[c] = "0";
    document.addEventListener("click",function(e){
       switch(e.target.value){
           case "0":
           case "1":
           case "2":
           case "3":
           case "4":
           case "5":
           case "6":
           case "7": 
           case "8":
            case "9": 
                if(value[c] == "0" || last!=undefined){
                    this.getElementById('btnDelete').disabled = false;
                    if(last !=undefined){
                        c=0;
                        last = undefined;
                    }
                    value[c] = e.target.value
               }else{
                value[c] += e.target.value  
               }
            break;
            case "none":
                break;
            case "back":
               value[c] = eliminarNumber(value[c]);
            break;
            case "sqrt":
                if(value[c] == "0"  || last!=undefined){
                    
                    if(last !=undefined){
                        c=0;
                        last = undefined;
                    }
                    value[c] = "√"
               }else{
                value[c]+= "√"
               }
           
            break;
            case "restart":
               temp = "";
               for(var i = 0; i<value.length; i++){
                   value.pop();
               }
               c= 0;
               value[c] = "0";
               end = undefined;
            break;
            case "delete":
               value[c]="0";
            break;
            case ".":
               if(value[c].includes(".")){

               }else{
                   value[c] += e.target.value;
               }
            break;
            case "=":
                var nPowers =0;
                for(var i = 0; i<value.length; i++){
                    if(value[c].includes("^") || value[c].includes("√")){
                        nPowers++;
                    }
                }
                if(value.length >= 3 || nPowers>0){
                    temp += value[c];
                    var total = hacercalculos(value)
                    numbersA.innerHTML = total;
                    var end = true;
                    this.getElementById('btnDelete').disabled = true;
                }else{
                    numbersA.innerHTML = value[0];
                }
            break;
            case "pow":
                value[c] +="^";
            break;
            case "-":
            case "+":
            case "/":
            case "%":
            case "*":
                this.getElementById('btnDelete').disabled = false;
               if(e.target.value == "-" && value=="0"){
                    value[c] = e.target.value
               }else{
                   if(value.length >= 3){
                     var total = hacercalculos(value);
                     temp = total + e.target.value;
                    }else{
                        temp += value[c]+e.target.value ;
                    }
                   if(total != undefined){
                       c=0;
                       value[c]= total;
                   }
                    c++;
                    value[c] = e.target.value;
                   
                   c++;
                   
                   value[c] = "0";
               }
       }
       
       numbersF.innerHTML = temp;
       if(end==undefined){
        numbersA.innerHTML = value[c];
       }else{
           last = end;
           end = undefined;
       }
      
    })
}

function hacercalculos(value){
    var num1 = value[0], hacer = value[1], num2 = value[2];
    var total = 0, powNumber, base ="", power="", sqrtNumber, n1 ="", sqrtNumber ="";
    if(num1.includes("√")){
       num1 =  ObtenerRaiz(num1)
        
    }
    if(num1.includes("^")){
        num1 = obtenerPow(num1)

    }
    if(hacer == undefined || num2 == undefined){
        return num1;
    }else{
        if(num2.includes("√")){
            num2 =  ObtenerRaiz(num2);

            console.log(num2 + ", "+ num1)
         }
        if(num2.includes("^")){
           num2 = obtenerPow(num2);
        }
        if(hacer == "+"){
            total = parseFloat(num1) + parseFloat(num2);
        }else if(hacer == "-"){
            total = parseFloat(num1) - parseFloat(num2);
        }else if(hacer == "*"){
            total = parseFloat(num1) * parseFloat(num2);
        }else if(hacer == "/"){
        total = parseFloat(num1) / parseFloat(num2);
        }else if(hacer == "%"){
            total = parseFloat(num1) % parseFloat(num2);
        }
    return total;
    }
}

function eliminarNumber(value){
    var array = Array.from(value);
    array.pop();
    var result = "";
    for(var i = 0; i<array.length; i++){
        result+=array[i];
    }
    return result;
}



function obtenerPow(myPow){
    var base ="", power="";
    var powNumber = Array.from(myPow)
    var index = powNumber.indexOf("^");
    for(var i = 0; i<powNumber.length; i++){
        if( i <index){
            base += powNumber[i];
        
        }else if( i>index){
            power += powNumber[i]
        }
    }
    return Math.pow( parseFloat(base), parseFloat(power));
}

function ObtenerRaiz(value){
    var n1="", sqrtNumber="";
    var sqrtNumbers = Array.from(value)
    var index = sqrtNumbers.indexOf("√");
    for(var i = 0; i< sqrtNumbers.length; i++){
        if( i <index){
            n1 += sqrtNumbers[i];
        
        }else if( i>index){
            sqrtNumber +=  sqrtNumbers[i]
        }
    }
    console.log(n1 + "+ "+ sqrtNumber);
    return  parseFloat(n1) * Math.sqrt(parseFloat(sqrtNumber));
   
}