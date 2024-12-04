function findFirstDuplicate(arr) {

    //Checagem de tipos
    if (!Array.isArray(arr)) {
        throw new Error("O argumento deve ser um vetor");
    }

    if (!arr.every((element) => typeof element === 'number' && Number.isInteger(element))) {
        throw new Error("O vetor deve conter apenas números inteiros");
    }

    // O Set só armazena valores únicos e é implementado com hash table
    // Mais eficiente que o array para verificar se um valor já existe (O(1) < O(log n))
    let set = new Set();

    // O(n)
    for (let i = 0; i < arr.length; i++) {
        // Se encontrar, retorna
        if (set.has(arr[i])) {
            return arr[i];
        }
        // Se não, adiciona no set
        set.add(arr[i]);
    }

    return -1;
}

module.exports = findFirstDuplicate;