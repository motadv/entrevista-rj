function isPalindrome(str) {
    // Checar se é uma string
    if (typeof str !== "string") {
        throw new Error("O argumento deve ser uma string");
    }

    // Percorre até metade da palavra, ignorando o valor do meio se for ímpar
    // Se encontrar um valor diferente entre o caracter atual e o seu simétrico, false
    // Se percorrer toda a metade sem encontrar diferenças, true
    for (i = 0; i <= Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

module.exports = isPalindrome;