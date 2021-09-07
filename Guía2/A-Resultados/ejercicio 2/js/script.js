var id = 0;
var producto = document.getElementById('txtProducto');
var precio = document.getElementById('txtPrecio');
var table = document.getElementById('tableitems');
function guardar(){
    var data = [id, producto.value, precio.value ]
    var html = "<tr>";
    for(var i = 0; i<3; i++){
        html += "<td>"+ data[i]+"</td>";
    }
    html += "</tr>";
    id++;
    table.innerHTML+=html;
}