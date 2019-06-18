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
      }else if (letter >= 32 && letter <= 64 || letter >= 91 && letter <= 96 || letter >= 123 && letter <= 169){
        newLetters.push(String.fromCharCode(letter));
      }
    }
    const newStr = newLetters.join('');
    return newStr;
   },

    decode : (nA , strA) => {
      const textoOriginal = [];
      for (let i = 0; i < strA.length; i++) {
        const textoAscii = strA.charCodeAt(i);
        if (textoAscii >= 65 && textoAscii <= 90) {
         let asciiA = ((textoAscii - 65 - nA) % 26);
          if (asciiA < 0) {
            asciiA = asciiA + 26;
          }
          asciiA = asciiA + 65;
          textoOriginal.push(String.fromCharCode(asciiA));
        } else if (textoAscii >= 97 && textoAscii <= 122) {
        let asciiA = ((textoAscii - 97 - nA) % 26);
          if (asciiA < 0) {
          asciiA = asciiA + 26;
          }
          asciiA = asciiA + 97;
          textoOriginal.push(String.fromCharCode(asciiA));
        }else if (textoAscii >= 32 && textoAscii <= 64 ||textoAscii >= 91 && textoAscii <= 96 || textoAscii >= 123 && textoAscii <= 169){
          textoOriginal.push(String.fromCharCode(textoAscii));
        }
      }
      const textoMostrar = textoOriginal.join('');
      return textoMostrar;
  },
}