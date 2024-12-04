function isPalindrome(str) {
    // Checar se é uma string
    if (typeof str !== "string") {
        throw new Error("O argumento deve ser uma string");
    }

    for (i = 0; i <= Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

module.exports = isPalindrome;