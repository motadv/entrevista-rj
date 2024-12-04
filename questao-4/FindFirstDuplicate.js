function findFirstDuplicate(arr) {

    //Checa se o argumento é um array
    if (!Array.isArray(arr)) {
        throw new Error("O argumento deve ser um vetor");
    }

    //Checa se o array contém apenas números
    if (!arr.every((element) => typeof element === 'number')) {
        throw new Error("O vetor deve conter apenas números");
    }

    // O Conjunto só armazena valores únicos e é implementado com hash table
    // Mais eficiente que o array para verificar se um valor já existe (O(1) - O(log n))
    let set = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i])) {
            return arr[i];
        }
        set.add(arr[i]);
    }

    return -1;
}

module.exports = findFirstDuplicate;