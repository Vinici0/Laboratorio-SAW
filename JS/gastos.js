var boton = document.getElementById('agregar');
var guardar = document.getElementById('guardar');
var lista = document.getElementById("lista");
var data = [];
boton.addEventListener("click", agregar);
var cant = 0;

function agregar() {
    var nombre = document.querySelector('#nombre').value;
    var precio = parseFloat(document.querySelector('#precio').value);
    var cantidad = parseFloat(document.querySelector('#cantidad').value)
    var total = precio * cantidad;
    //agrega elementos al arreglo
    data.push({
        "id": cant,
        "nombre": nombre,
        "precio": precio,
        "cantidad": cantidad,
        "total": total
    });

    //convertir el arreglo a json
    console.log(JSON.stringify(data));

    var id_row = 'row' + cant;
    var fila = '<tr id=' + id_row + '><td>' + nombre + '</td><td>' + precio + '</td><td>' + cantidad + '</td><td>' + total + 
                '</td><td><a href="#" class="btn btn-danger" onclick="eliminar(' + cant + ')";>Eliminar</a> &nbsp <a href="#" class="btn btn-danger" onclick="cantidad(' + cant + ')";>Editar Cantidad</a></td></tr>';
    //agregar fila a la tabla
    $("#lista").append(fila);
    $("#nombre").val('');
    $("#precio").val('');
    $("#cantidad").val('');
    $("#nombre").focus();
    cant++;
    sumar();
}

function eliminar(row) {
    //remueve la fila de la tabla html
    $("#row" + row).remove();
    //remover el elmento del arreglo
    //data.splice(row,1);
    //buscar el id a eliminar
    var i = 0;
    var pos = -1;
    for (x of data) {
        console.log(x.id);
        if (x.id == row) {
            pos = i;
        }
        i++;
    }
    data.splice(pos, 1);
    sumar();
}

function cantidad(row) {
    var canti = parseInt(prompt("Nueva cantidad"));
    data[row].cantidad = canti;
    data[row].total = data[row].cantidad * data[row].precio;
    var filaid = document.getElementById("row" + row);
    celda = filaid.getElementsByTagName('td');
    celda[2].innerHTML = canti;
    celda[3].innerHTML = data[row].total;
    console.log(data);
    sumar();
}

function sumar() {
    let sumatotal = 0;
    for (x of data) {
        sumatotal = sumatotal + x.total;
    }
    document.querySelector("#total").innerHTML = "Total " + sumatotal;
}