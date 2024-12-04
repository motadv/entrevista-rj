const findFirstDuplicate = require("../../questao-4/FindFirstDuplicate");

describe("Testes da questão 4", () => {
    test("Testa um vetor com um duplicado", () => {
        expect(findFirstDuplicate([2, 5, 1, 2, 3, 6])).toBe(2);
    });
    
    test("Testa um vetor sem duplicados", () => {
        expect(findFirstDuplicate([1, 2, 3, 4])).toBe(-1);
    });
    
    test("Testa um vetor com duplicado aparecendo no final", () => {
        expect(findFirstDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 9])).toBe(9);
    });
    
    test("Testa um vetor com multiplos duplicados", () => {
        expect(findFirstDuplicate([1, 1, 2, 2, 3, 3, 6, 7, 8, 9])).toBe(1);
    });
    
    test("Testa quando o vetor é vazio", () => {
        expect(findFirstDuplicate([])).toBe(-1);
    });

    test("Testa quando o vetor possui apenas um elemento", () => {
        expect(findFirstDuplicate([1])).toBe(-1);
    });

    test("Testa quando o argumento não é um vetor", () => {
        expect(() => findFirstDuplicate("a")).toThrow('O argumento deve ser um vetor');
    });

    test("Testa quando o vetor possui um elemento que não é um número", () => {
        expect(() => findFirstDuplicate([1, 2, "a"])).toThrow('O vetor deve conter apenas números');
    });
});
    