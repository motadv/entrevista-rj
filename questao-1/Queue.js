class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(item) {
    this.data.push(item);
  }

  dequeue() {
    // Comportamento padrão é retornar undefined
    return this.data.shift();
  }

  peek() {
    // Seguindo o comportamento padrão de retornar undefined
    if (this.isEmpty()) {
      return undefined;
    }
    return this.data[0];
  }

  isEmpty() {
    return this.data.length === 0;
  }
}

module.exports = Queue;