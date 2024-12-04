function reverseString(str) {

  //Checa se o argumento é uma string
    if (typeof str !== 'string') {
        throw new Error("O argumento deve ser uma string");
    }

  let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

module.exports = reverseString;