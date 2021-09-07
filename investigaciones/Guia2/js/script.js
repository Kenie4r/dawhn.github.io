function reverse(){
    var inputs = document.getElementsByName('txtinput');
    console.log(inputs)
    var myData = new Array();
    for(var i = 0; i<inputs.length; i++){
        myData[i] = inputs[i].value; 
    }
    var myDataR = myData.reverse()
    
    inputs = document.getElementsByName('txtResult');
    console.log(inputs)    
    for(var i = 0; i<inputs.length; i++){
        inputs[i].value = myDataR[i]
    }
}

document.getElementById('btnClick').addEventListener("click", function(){
    reverse()
})