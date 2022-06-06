const inputMensaje = document.querySelector("#mensaje");
const inputResultado = document.querySelector("#resultado");

const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");



const boxErrores = document.querySelector(".boxErrores");

function validarMensaje () {
    // Borrar errores previos
    let erroresPrevios = boxErrores.querySelectorAll(".error");
    for (let err of erroresPrevios) {
        boxErrores.removeChild(err);
    }
    var mensaje = inputMensaje.value;
    let letrasValidas = "abcdefghijklmnñopqrstuvwxyz ";
    let mensajeError = document.createDocumentFragment();
    for (let letra of mensaje) {
        if (!letrasValidas.includes(letra)) {
            let p = document.createElement("p");
            p.setAttribute("class", "error");
            p.setAttribute("style","font-size: 20px;");
            p.textContent = `* Solo letras minúsculas sin acento, ni símbolos.`;
            mensajeError.appendChild(p);
        }
    }
    boxErrores.appendChild(mensajeError);
    if (boxErrores.children.length === 0) {
        return true;
    }
    return false;
}

function encriptar (){
  if (!validarMensaje()) return;
    var mensaje = inputMensaje.value;
    var mensajeEncriptado = mensaje
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");

    inputResultado.value = mensajeEncriptado;
    mostrar();
}

function desencriptar (){
  if (!validarMensaje()) return;
    var mensajeEncriptado = inputMensaje.value;
    var mensaje = mensajeEncriptado
    .replaceAll("enter","e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

    inputResultado.value = mensaje;
    mostrar();
}

function copiar (){
    var mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    inputMensaje.value = "";
    inputMensaje.focus();
}

function mostrar (){
  document.getElementById('result2').style.display = 'none';
  document.getElementById('result').style.display = 'block';
}


btnEncriptar.onclick = encriptar;

btnDesencriptar.onclick = desencriptar;

btnCopiar.onclick = copiar;
