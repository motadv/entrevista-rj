const isPalindrome = require("../questao-7/IsPalindrome");

describe("Testes da questão 7", () => {
    test("Testa uma string palíndroma", () => {
        expect(isPalindrome("radar")).toBe(true);
    });

    test("Testa uma string não palíndroma", () => {
        expect(isPalindrome("javascript")).toBe(false);
    });

    test("Testa uma string vazia", () => {
        expect(isPalindrome("")).toBe(true);
    });

    test("Testa uma string com um caractere", () => {
        expect(isPalindrome("a")).toBe(true);
    });

    test("Testa se a entrada é uma string", () => {
        expect(() => isPalindrome(1)).toThrow("O argumento deve ser uma string");
        expect(() => isPalindrome({error: true})).toThrow("O argumento deve ser uma string");
    });

    test("Testa uma string palíndroma com espaços", () => {
        expect(isPalindrome("ar ra")).toBe(true);
    });

});

