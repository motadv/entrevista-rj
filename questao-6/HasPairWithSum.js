function hasPairWithSum(arr, sum) {

  // Checagem de tipos
  if (!Array.isArray(arr)) {
    throw new Error("O primeiro argumento deve ser um vetor")
  }

  if (!arr.every((element) => typeof element === 'number')) {
    throw new Error("O vetor deve conter apenas números")
  }

  if (typeof sum !== 'number') {
    throw new Error("O segundo argumento deve ser um número")
  }

  // Ordena a lista de numeros crescentemente
  const sortedArr = arr.sort();

  // Índice começando dos menores elementos
  let left = 0;

  // Índice começando dos maiores elementos
  let right = sortedArr.length - 1;

  // Caminha com o primeiro índice da esquerda se a soma for menor
  // Caminha com o segundo índice da direita para a esquerda se a soma for maior
  // Se encontrar a soma, retorna true
  // Se os índices se cruzarem, retorna false

  while (left < right) {
    let currentSum = sortedArr[left] + sortedArr[right];

    if (currentSum === sum) {
      return true;
    } else if (currentSum < sum) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}

module.exports = hasPairWithSum;