function swanOpcion(opcion){
    switch (opcion) {
        case "error":
            Swal.fire({
                icon: "error",
                title: "Texto vacio...",
                text: "El campo de texto no puede estar vacio!",
                width:"320px",
                background: " rgba(0, 156, 189, 0.7)",
                color: "white"
            });
            break;
        case "info":
            Swal.fire({
                icon: "info",
                title: "Caracteres no validos",
                text: "Solo letras minusculas sin numeros ni caracteres especiales",
                width:"320px",
                background: " rgba(0, 156, 189, 0.7)",
                color: "white"
            });
            break;
        case "copiar":
            Swal.fire({
                icon: "info",
                title: "Sin texto para copiar",
                text: "El campo de texto no puede estar vacio",
                width:"320px",
                background: " rgba(0, 156, 189, 0.7)",
                color: "white"
            });
            break;
        default:
        // código a ejecutar si ninguna de las opciones anteriores se cumple
    }
}