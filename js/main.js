let resultado = document.querySelector(".resultado");

function crypt() {
    let inputElement = document.querySelector('input');
    let text = inputElement.value.trim();

    if (text === "") {
        displayText("O campo de text está vazio. Por favor, digite um texto.", "error");
        return;
    }

    if (/^[a-z\s,.!?]*$/.test(text)) {
        let textCrypt = text.replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        displayText(textCrypt, "criptografado");
        ocultElementsQuit();
        displayElementsOcult();
        copyPortpapeles(textCrypt);
    } else {
        displayText("Por favor, ingrese apenas letras minúsculas e sem acento.", "error");
    }
}

function decrypt() {
    
    let inputElement = document.querySelector('input');
    let text = inputElement.value.trim();

    if (text === "") {
        displayText("O campo de texto está vazio. Por favor, digite um texto.", "error");
        return;
    }

    let textDecrypter = text.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    displayText(textDecrypter, "Descriptografado");
    ocultElementsQuit();
    displayElementsOcult();
    copyPortpapeles(textDecrypter);
}

function displayText(text, tipo) {
    resultado.innerHTML = text;

    if (tipo === "error") {
        resultado.style.color = "red";
    } else {
        resultado.style.color = "black";
    }
}

function ocultElementsQuit() {
    let elementosQuitar = document.querySelectorAll(".quitar");
    elementosQuitar.forEach(elemento => elemento.style.display = "none");
}
function displayElementsOcult() {
    let elementosocults = document.getElementsByClassName("ocult");
    for (let i = 0; i < elementosocults.length; i++) {
        elementosocults[i].style.display = "block";
    }
}

function copyPortpapeles(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el text: ', err);
    });
}