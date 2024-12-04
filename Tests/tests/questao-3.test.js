const binarySearch = require("../../questao-3/BuscaBinaria");

describe("Testes da questão 3", () => {
  test("Teste de de busca binária com valor presente", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)).toBe(8);
  });

  test("Teste de busca binária sem o valor presente", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)).toBe(-1);
  });

  test("Teste de busca binária com array vazio", () => {
    expect(binarySearch([], 10)).toBe(-1);
  });

  test("Teste de busca binária com array de tamanho 1", () => {
    expect(binarySearch([1], 1)).toBe(0);
  });

  test("Teste de busca binária com array de tamanho 1 e valor não presente", () => {
    expect(binarySearch([1], 2)).toBe(-1);
  });

  test("Testa se o primeiro argumento é um array", () => {
    expect(() => binarySearch("a", 2)).toThrow(
      "O primeiro argumento deve ser um vetor"
    );
  });

  test("Testa se valores são apenas números", () => {
    expect(() => binarySearch(["a", "b", "c", "d"], 2)).not.toThrow(
      "O vetor deve conter apenas números"
    );
  });

  test("Testa se target é um número", () => {
    expect(() => binarySearch([1, 2, 3, 4], "c")).toThrow(
      "O segundo argumento deve ser um número"
    );
  });

  test("Resultado inconsistente em vetores desordenados", 
  () => {
    expect(binarySearch([9, 8, 7, 6, 5, 4, 3, 2, 1], 9)).toBe(-1);
    expect(binarySearch([3, 5, 1], 5)).toBe(1);
  });

});
