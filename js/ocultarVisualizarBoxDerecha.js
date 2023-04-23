let resultado = document.getElementById("textoWork");

function visibleOculto() {
    var boxResultado = document.querySelector(".boxResultado");
    boxResultado.classList.add("none");
    let imagen = document.querySelector(".img");
    imagen.classList.add("aparecer");
    if (resultado.value.length > 0) {
        boxResultado.classList.remove("none");
        boxResultado.classList.add("aparecer");
        imagen.classList.remove("aparecer");
        imagen.classList.add("none");
    } else {
        boxResultado.classList.add("none");
        boxResultado.classList.remove("aparecer");
        imagen.classList.remove("none");
        imagen.classList.add("aparecer");
    }
}

visibleOculto();