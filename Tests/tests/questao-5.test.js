const reverseString = require("../../questao-5/ReverseString");

describe("Testes da questão 5", () => {

    test("Testa uma string com tamanho par", () => {
        expect(reverseString("abcd")).toBe("dcba");
    });

    test("Testa uma string com tamanho ímpar", () => {
        expect(reverseString("abcde")).toBe("edcba");
    });

    test("Testa uma string vazia", () => {
        expect(reverseString("")).toBe("");
    });

    test("Testa uma string com um caractere", () => {
        expect(reverseString("a")).toBe("a");
    });

    test("Testa se a entrada é uma string", () => {
        expect(() => reverseString(1)).toThrow("O argumento deve ser uma string");
        expect(() => reverseString({error: true})).toThrow("O argumento deve ser uma string");
    });


});