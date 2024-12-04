const areAnagrams = require("../../questao-2/Anagramas");

describe("Testes da questão 2", () => {
  test("Testa um anagrama", () => {
    expect(areAnagrams("abc", "cba")).toBe(true);
  });

  test("Testa um não anagrama", () => {
    expect(areAnagrams("abc", "def")).toBe(false);
  });

  test("Testa strings com tamanhos diferentes", () => {
    expect(areAnagrams("abc", "cbad")).toBe(false);
  });

  test("Testa strings vazias", () => {
    expect(areAnagrams("", "")).toBe(true);
  });

  test("Testa uma string com espaço e a outra sem", () => {
    expect(areAnagrams("abc", "cba ")).toBe(false);
  });

  test("Testa ambas strings com espaços", () => {
    expect(areAnagrams("abc ", " cba")).toBe(true);
  });

  test("Testa strings iguais", () => {
    expect(areAnagrams("abc", "abc")).toBe(true);
  });

  test("Testa se as entrada são strings", () => {
    expect(() => areAnagrams(1, {error: true})).toThrow('Ambas entradas devem ser strings');
    expect(() => areAnagrams("teste", 2)).toThrow('Ambas entradas devem ser strings');
    expect(() => areAnagrams(2, "teste")).toThrow('Ambas entradas devem ser strings');
});

});
