const queueClass = require("../../questao-1/Queue");

describe("Testes da questão 1", () => {
  test("Teste de enfileiramento", () => {
    const queue = new queueClass();
    queue.enqueue(10);
    queue.enqueue(20);
    expect(queue.peek()).toBe(10);
  });

  test("Teste de desenfileiramento", () => {
    const queue = new queueClass();
    queue.enqueue(10);
    queue.enqueue(20);

    queue.dequeue();
    expect(queue.dequeue()).toBe(20);
  });

  test("Teste de fila vazia", () => {
    const queue = new queueClass();
    queue.enqueue(10);
    queue.enqueue(20);

    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  test("Teste de fila não vazia", () => {
    const queue = new queueClass();
    queue.enqueue(10);
    queue.enqueue(20);

    expect(queue.isEmpty()).toBe(false);
  });

  test("Valores de diferentes tipos", () => {
    const queue = new queueClass();
    queue.enqueue("10");
    queue.enqueue(20);

    expect(queue.peek()).toBe("10");
  });
});
