//boton para elegir la opcion codificar en el menú principal
const botonCodificar=document.getElementById("option-c");
//boton para elegir la opcion decodificar en el menu principal
const botonDecodificar=document.getElementById("option-d");
//boton para realizar la accion de codificar
const botonCode=document.getElementById("codificar");
const resultado= document.getElementById("mostrar-cifrado");
//boton para realizar acción decodificar
const botonDecode=document.getElementById("decodificar");
const resDecodificar=document.getElementById("msj-original");

const boton1 = () =>{
    document.getElementById("opcion-codificar").style.visibility="visible";
}
botonCodificar.addEventListener('click', boton1);

const boton2 = () =>{
    document.getElementById("opcion-decodificar").style.visibility="visible";
}
botonDecodificar.addEventListener('click', boton2);

//funcion que cifra
const encode = require('./cipher.js');

const cipherEvent = () => {  
    const getMensaje = document.getElementById("mensaje").value;
    const n = new Number(document.getElementById("salto-uno").value);
    //console.log('n', n);
    const textoNuevo = encode(getMensaje, n);
    resultado.innerHTML = 'Tu mensaje cifrado es:' + ' ' + textoNuevo;
    //console.log(textoNuevo);
  }

const decode = require('./cipher.js');
const decipherEvent = () => {
    const getMensajeA = document.getElementById("mensaje-codificado").value;
    const nA = new Number(document.getElementById("salto-dos").value);
    const mensajeDescifrado = decode(getMensajeA, nA);
    resDecodificar.innerHTML = 'Tu mensaje original es:' + ' ' + mensajeDescifrado;
  };
botonCode.addEventListener("click",cipherEvent); 
botonDecode.addEventListener("click",decipherEvent); 