function recogerDatos() {

    let nombreCliente = document.getElementById("nombre_cliente").value;
    let telefonoCliente = document.getElementById("telefono_cliente").value;
    let emailCliente = document.getElementById("email_cliente").value;
    let ciudad = document.getElementById("ciudad").value;
    let direccion = document.getElementById("direccion").value;


    let mensajeFinal = "El cliente con nombre: "+ nombreCliente+
                        ", telefono: "+ telefonoCliente+
                        ", email: "+emailCliente+
                        " ha elegido un helado con el sabor: "+ciudad+
                        " en un recipiente de " + direccion+
                        " con los siguientes extras: ";

    
    console.log(mensajeFinal);
}