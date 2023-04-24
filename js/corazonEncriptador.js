document.getElementById("encri").onclick = function () {
    visibleOculto();
    const regex = /^[a-z \n]+$/;
    let textWork = document.getElementById("textoWork");
    let textResult;
    if (regex.test(textWork.value)) {
        textResult = document.getElementById("resultado");
        textResult.textContent = textWork.value
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat");
        textWork.value = "";
    } else {
        textWork = document.getElementById("textoWork");
        if (textWork.value.length === 0) {
            swanOpcion("error");
        } else {
            swanOpcion("info");
        }
        textWork.value = "";
        visibleOculto();
    }

}


document.getElementById("desen").onclick = function () {
    visibleOculto();
    const regex = /^[a-z \n]+$/;
    let textWork = document.getElementById("textoWork");
    let textResult;
    if (regex.test(textWork.value)) {
        textResult = document.getElementById("resultado");
        textResult.textContent = textWork.value
            .replace(/\b\w*enter\w*\b/gi, function (match) {
                return match.replace(/enter/gi, "e");
            })
            .replace(/\b\w*imes\w*\b/gi, function (match) {
                return match.replace(/imes/gi, "i");
            })
            .replace(/\b\w*ai\w*\b/gi, function (match) {
                return match.replace(/ai/gi, "a");
            })
            .replace(/\b\w*ober\w*\b/gi, function (match) {
                return match.replace(/ober/gi, "o");
            })
            .replace(/\b\w*ufat\w*\b/gi, function (match) {
                return match.replace(/ufat/gi, "u");
            });
    } else {
        textWork = document.getElementById("textoWork");
        textResult = document.getElementById("resultado");
        if (textWork.value.length === 0) {
            swanOpcion("error");
            textResult.value = "";

        } else {
            swanOpcion("info");
            textResult.value = "";
        }
        textWork.value = "";
        visibleOculto();
    }
    textWork.value = "";
}

let btnCopy = document.getElementById("copiar");

function changeCopyButton() {
    btnCopy.textContent = "Copiar";
}

changeCopyButton();

document.getElementById("copiar").onclick = function () {
    let copyText = document.getElementById("resultado");
    let textWork = document.getElementById("textoWork");
    
    if (copyText.textContent.length > 0){
        navigator.clipboard.writeText(copyText.textContent);
        btnCopy.textContent = "Copiado con éxito!";
        setTimeout(changeCopyButton, 2000);
    }else {
        swanOpcion("copiar")
    }
    
    textWork.value = copyText.textContent;
    

}