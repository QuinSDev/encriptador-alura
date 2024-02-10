let titulo2 = document.getElementById("titulo2");
let mensajeInicial = document.getElementById("mensaje-inicial");

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
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
    // Reemplaza los caracteres de nueva línea con la etiqueta <br>
    let textoFormateado = textoEncriptado.replace(/\n/g, "<br>");
    asignarTextoElemento("#texto-formateado", textoFormateado);
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
    // Reemplaza los caracteres de nueva línea con la etiqueta <br>
    let textoFormateado = textoEncriptado.replace(/\n/g, "<br>");
    asignarTextoElemento("#texto-formateado", textoFormateado);
  } else {
    mensajesIniciales();
  }
}

function mensajesIniciales() {
  let imagen = document.querySelector(".mensaje-encriptado img");
  if (!imagen) {
    let nuevaImagen = document.createElement("img");
    nuevaImagen.src = "img/buscando.png";
    nuevaImagen.alt = "personjae con una lupa";
    document.querySelector(".mensaje-encriptado").prepend(nuevaImagen);
  }

  if (titulo2) {
    titulo2.style.display = "block";
    titulo2.innerHTML = "Ningún mensaje fue encontrado";
  }

  if (mensajeInicial) {
    mensajeInicial.style.display = "block";
    mensajeInicial.innerHTML =
      "Ingresa el texto que desees encriptar o desencriptar";
  }

  document.getElementById("texto-formateado").innerHTML = "";
}

mensajesIniciales();
