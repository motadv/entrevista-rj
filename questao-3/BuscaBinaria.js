function binarySearch(arr, target) {

    // Checagem de tipos
    if (!Array.isArray(arr)) {
        throw new Error("O primeiro argumento deve ser um vetor")
    }
    
    if (typeof target !== 'number') {
        throw new Error("O segundo argumento deve ser um número")
    }

    // Não faz sentido verificar se todos os elementos são números ou se o array está ordenado
    // Essa checagem seria mais custosa que a busca binária em si
    // O(n) > O(log n)

    // Implementação da busca binária

    // Dois ponteiros, um no inicio e outro no fim
    // Utilizar ponteiros é mais eficientes que criar novas listas com os valores
    let left = 0;
    let right = arr.length - 1;

    // Se o valor central for maior que o target, o target só pode estar a esquerda
    // Se o valor central for menor que o target, o target só pode estar a direita
    while (left <= right) {

        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

module.exports = binarySearch;