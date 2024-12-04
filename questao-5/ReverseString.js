function reverseString(str) {
  //Checa se o argumento é uma string
  if (typeof str !== "string") {
    throw new Error("O argumento deve ser uma string");
  }

  // Char a char de trás para frente, percorre e concatena
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;

  //Outra alternativa seria usar o método reverse() de arrays
  //return str.split("").reverse().join("");
  //Separa cara caracter em um array, inverte a ordem e junta de volta em uma string
}

module.exports = reverseString;
