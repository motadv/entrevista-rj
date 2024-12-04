function binarySearch(arr, target) {

    // Checagem de tipos
    if (!Array.isArray(arr)) {
        throw new Error("O primeiro argumento deve ser um vetor")
    }

    if (typeof target !== 'number') {
        throw new Error("O segundo argumento deve ser um número")
    }

    if (!arr.every((element) => typeof element === 'number')) {
        throw new Error("O vetor deve conter apenas números")
    }

    let left = 0;
    let right = arr.length - 1;

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