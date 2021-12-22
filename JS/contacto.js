function recogerDatos() {

    let nombreCliente = document.getElementById("nombre_cliente").value;
    let telefonoCliente = document.getElementById("telefono_cliente").value;
    let emailCliente = document.getElementById("email_cliente").value;
    let ciudad = document.getElementById("ciudad").value;
    let direccion = document.getElementById("direccion").value;
    let option = document.getElementById("plan").value;


    let mensajeFinal = "El cliente con nombre: "+ nombreCliente+
                        ", telefono: "+ telefonoCliente+
                        ", email: "+emailCliente+
                        " ciudad: "+ciudad+
                        " direccion " + direccion+
                        " con los siguientes extras: ";

    
    console.log(mensajeFinal);
    //document.write(mensajeFinal);
    alert("Datos registrados con éxito. Enviaremos toda la información necesaria para dar de alta su plan.")
}