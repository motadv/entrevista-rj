const app = require("../../questao-8/setup");
const port = 3000;

let server;

beforeAll(() => {
    console.log("Iniciando servidor");
    server = app.listen(port);
});

afterAll(() => {
    console.log("Fechando servidor");
    server.close();
});

describe("Testes da questão 8", () => {

test("Teste se str1 e str2 são anagramas", async () => {
    const response = await fetch ("http://localhost:3000/anagrams", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ str1: "listen", str2: "silent" })
    });
    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data.areAnagrams).toBe(true);

});

test("Teste se str1 e str2 não são anagramas", async () => {
    const response = await fetch ("http://localhost:3000/anagrams", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ str1: "listen", str2: "not" })
    });
    expect(response.status).toBe(200);


    const data = await response.json();
    expect(data.areAnagrams).toBe(false);

});

test("Testa enviar na rota incorreta", async () => {
    const response = await fetch ("http://localhost:3000/incorrect", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ str1: "listen", str2: "silent" })
    });

    expect(response.status).toBe(404);
});

test("Testa enviar um método diferente de POST", async () => {
    const response = await fetch ("http://localhost:3000/anagrams", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    // Comportamento padrão do express é retornar 404 ao invés de 405 para métodos não imnplementados
    expect(response.status).toBe(404);
});

test("Testa enviar um corpo vazio", async () => {
    const response = await fetch ("http://localhost:3000/anagrams", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({})
    });

    expect(response.status).toBe(400);
});

test("Testa enviar um corpo sem str1", async () => {
    const response = await fetch ("http://localhost:3000/anagrams", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ str2: "silent" })
    });

    expect(response.status).toBe(400);
});

test("Testa enviar um corpo sem str2", async () => {
    const response = await fetch ("http://localhost:3000/anagrams", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ str1: "listen" })
    });

    expect(response.status).toBe(400);
});

test("Testa enviar um corpo com str1 ou str2 não sendo string", async () => {
    const response = await fetch ("http://localhost:3000/anagrams", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ str1: 1, str2: "silent" })
    });

    expect(response.status).toBe(400);

    const response2 = await fetch ("http://localhost:3000/anagrams", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ str1: "listen", str2: 1 })
    });

    expect(response2.status).toBe(400);
});

});