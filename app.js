let titulo2 = document.getElementById("titulo2");
let mensajeInicial = document.getElementById("mensaje-inicial");
let copiar = document.getElementById("portapapeles");
let mensajeCopiado = document.querySelector("#mensaje-copiado");
let mostrarMensaje = document.querySelector(".ocultar");

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.textContent = texto;
  return;
}

function limpiar() {
  let imagen = document.querySelector(".mensaje-encriptado img");

  if (titulo2) {
    titulo2.style.display = "none";
  }

  if (mensajeInicial) {
    mensajeInicial.style.display = "none";
  }

  if (imagen) {
    imagen.remove();
  }
}

function encriptar() {
  let textoUsuario = document.querySelector("#mensajeIngresado").value.trim();
  if (textoUsuario) {
    limpiar();
    let textoEncriptado = textoUsuario
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
      mostrarMensaje.style.display = "block";
    asignarTextoElemento("#texto-formateado", textoEncriptado);
  } else {
    mensajesIniciales();
  }
}

function desencriptar() {
  let textoUsuario = document.querySelector("#mensajeIngresado").value.trim();
  if (textoUsuario) {
    limpiar();
    let textoEncriptado = textoUsuario
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
      mostrarMensaje.style.display = "block";
    asignarTextoElemento("#texto-formateado", textoEncriptado);
  } else {
    mensajesIniciales();
  }
}

function copiarAlPortapapeles() {
  let textoFormateado = document.getElementById("texto-formateado");
  let textoParaCopiar = textoFormateado.value;
  console.log(textoParaCopiar);

  if (textoParaCopiar) {
    navigator.clipboard.writeText(textoParaCopiar).then(
      function () {
        copiar.style.display = "block";
        mensajeCopiado.innerText = ` ¡Copiado al portapapeles exitosamente!`;

        // Oculta el mensaje después de 2 segundos
        setTimeout(function () {
          copiar.style.display = "none";
          mensajeCopiado.innerText = "";
        }, 3000);
      },
      function (err) {
        console.error("Error al copiar al portapapeles: ", err);
      }
    );
  }
}

let botonCopiar = document.querySelector("#copiar");
botonCopiar.addEventListener("click", copiarAlPortapapeles);

function mensajesIniciales() {
  copiar.style.display = "none";
  let imagen = document.querySelector(".mensaje-encriptado img");
  if (!imagen && window.innerWidth > 768) { // Aquí está el cambio
    let nuevaImagen = document.createElement("img");
    nuevaImagen.src = "img/Muñeco.png";
    nuevaImagen.alt = "personjae con una lupa";
    document.querySelector(".mensaje-encriptado").prepend(nuevaImagen);
  }

  if (titulo2) {
    titulo2.style.display = "block";
    titulo2.innerText = "Ningún mensaje fue encontrado";
  }

  if (mensajeInicial) {
    mensajeInicial.style.display = "block";
    mensajeInicial.innerText =
      "Ingresa el texto que desees encriptar o desencriptar";
  }

  mostrarMensaje.style.display = "none";
  document.getElementById("texto-formateado").innerText = "";
  mensajeCopiado.innerText = "";
}

mensajesIniciales();
