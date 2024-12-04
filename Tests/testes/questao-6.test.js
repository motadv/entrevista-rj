const hasPairWithSum = require("../../questao-6/HasPairWithSum")

describe("Testes da questão 6", () => {
    test("Testa um vetor com um par que soma 8", () => {
        expect(hasPairWithSum([1, 2, 3, 5], 8)).toBe(true);
    });

    test("Testa um vetor sem par que soma 8", () => {
        expect(hasPairWithSum([1, 2, 4, 9], 8)).toBe(false);
    });

    test("Testa um vetor com um par que soma 10", () => {
        expect(hasPairWithSum([1, 2, 4, 4, 6], 10)).toBe(true);
    });

    test("Testa um vetor desordenado com um par que soma 8", () => {
        expect(hasPairWithSum([5, 2, 3, 1], 8)).toBe(true);
    });

    test("Testa um vetor com um par que soma 0", () => {
        expect(hasPairWithSum([1, 2, 3, 5], 0)).toBe(false);
    });

    test("Testa um vetor vazio", () => {
        expect(hasPairWithSum([], 8)).toBe(false);
    });

    test("Testa se o primeiro argumento é um vetor", () => {
        expect(() => hasPairWithSum("a", 2)).toThrow('O primeiro argumento deve ser um vetor');
    });
    
    test("Testa se o segundo argumento é um número", () => {
        expect(() => hasPairWithSum([1, 2, 3, 4], "c")).toThrow('O segundo argumento deve ser um número');
    });

    test("Testa se valores são apenas números", () => {
        expect(() => hasPairWithSum(["a", "b", "c", "d"], 2)).toThrow('O vetor deve conter apenas números');
    });

});