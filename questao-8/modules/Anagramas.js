function areAnagrams(str1, str2) {

    // Se forem tamanhos diferentes não podem ser anagramas
    if (str1.length !== str2.length) {
        return false;
    }

    // Dicionario de frequencia de caracteres
    const freq1 = {};
    const freq2 = {};

    // Preenchendo dicionario de frequencia
    // O(n)
    for (let i = 0; i < str1.length; i++) {
        // Cada caracter é uma chave, o valor é a quantidade de aparições. Valor inicial = 0
        freq1[str1[i]] = (freq1[str1[i]] || 0) + 1;
        freq2[str2[i]] = (freq2[str2[i]] || 0) + 1;
    }

    // Comparando dicionarios
    // O(n)
    for (let key in freq1) {
        if (freq1[key] !== freq2[key]) {
            return false;
        }
    }

    return true;
}

module.exports = areAnagrams;