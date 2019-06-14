window.cipher = {
  encode : (n , str) =>{
    const newLetters = [ ];
     for(let i = 0; i < str.length; i++){
       const letter = str.charCodeAt(i);
       const newASCII = (letter-65+n)%26+65;
       newLetters.push(String.fromCharCode(newASCII)); 
    }
    const newStr = newLetters.join('');
    return newStr;
   },

    decode : (nA , strA) => {
     const textoOriginal = [];
      for(let i=0; i < strA.length; i++){
        const textoAscii= strA.charCodeAt(i);
        const asciiNew = (textoAscii+65-nA)%26+65;
        textoOriginal.push(String.fromCharCode(asciiNew));
      }
      const textoMostrar = textoOriginal.join('');
      return textoMostrar;
  }
}


