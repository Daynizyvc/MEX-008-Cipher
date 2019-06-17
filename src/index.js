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



const cipherEvent = () => {  
    const getMensaje = document.getElementById("mensaje").value;
    const n = new Number(document.getElementById("salto-uno").value);
    let funcionCipher = (window.cipher.encode( n, getMensaje));
    resultado.innerHTML = 'Tu mensaje cifrado es:' + ' ' + funcionCipher;
    }

const decipherEvent = () => {
    const getMensajeA = document.getElementById("mensaje-codificado").value;
    const nA = new Number(document.getElementById("salto-dos").value);
    const funcionDecipher = (window.cipher.decode( nA, getMensajeA));
    resDecodificar.innerHTML = 'Tu mensaje original es:' + ' ' + funcionDecipher;
  };
botonCode.addEventListener("click",cipherEvent); 
botonDecode.addEventListener("click",decipherEvent); 