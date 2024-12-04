class Queue {

  // Inicializa a fila com um array vazio
  constructor() {
    this.data = [];
  }

  // Insere um item no final da fila
  enqueue(item) {
    this.data.push(item);
  }

  // Remove o primeiro item da fila e retorna o valor
  dequeue() {
    // Comportamento padrão é retornar undefined
    return this.data.shift();
  }

  // Retorna o primeiro item da fila sem remover
  peek() {
    // Seguindo o comportamento padrão de retornar undefined
    if (this.isEmpty()) {
      return undefined;
    }
    return this.data[0];
  }

  // Verifica se a fila está vazia pelo tamanho do array
  isEmpty() {
    return this.data.length === 0;
  }
}

module.exports = Queue;