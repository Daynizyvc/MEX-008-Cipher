window.cipher = {
  encode : (n , str) =>{
  const newLetters = [];
  for (let i = 0; i < str.length; i++) {
    const letter = str.charCodeAt(i);
    if (letter >= 65 && letter <= 90) {
      const newASCII = (letter - 65 + n) % 26 + 65;
      newLetters.push(String.fromCharCode(newASCII));
    }else if(letter >= 97 && letter <= 122){
        const newASCII = (letter - 97 + n) % 26 + 97;
        newLetters.push(String.fromCharCode(newASCII));
    }else if (letter == '32'){
        newLetters.push(String.fromCharCode(letter));
    };  
    };
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


