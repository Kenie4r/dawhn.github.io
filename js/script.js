document.addEventListener("scroll", function(e){
    var y = window.scrollY;
    changeHead(y); 
});

function changeHead(y){
    var header =  document.querySelector('.header');
    if(y>40){
  
       header.className += " rHeader";
    }else if(y<10){
        header.className = "header"
    }
}