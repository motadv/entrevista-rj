// Questão 1
console.log("Questão 1");

const queueClass = require("./questao-1/Queue");

const queue = new queueClass();

queue.enqueue(10); // [10]
queue.enqueue(20); // [10, 20]

console.log(queue.peek()); // 10
console.log(queue.dequeue()); // 10
console.log(queue.isEmpty()); // false

console.log(queue.dequeue()); // 20
console.log(queue.isEmpty()); // true

//  Questão 2
console.log("Questão 2");

const areAnagrams = require("./questao-2/Anagramas");

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false

// Questão 3
console.log("Questão 3");

const binarySearch = require("./questao-3/BuscaBinaria");

let arr = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(arr, 5)); // 2
console.log(binarySearch(arr, 10)); // -1

// Questão 4
console.log("Questão 4");

const findFirstDuplicate = require("./questao-4/FindFirstDuplicate");

console.log(findFirstDuplicate([2, 5, 1, 2, 3, 5])); // 2
console.log(findFirstDuplicate([1, 2, 3, 4])); // -1

// Questão 5
console.log("Questão 5");

const reverseString = require("./questao-5/ReverseString");

console.log(reverseString("hello")); // olleh
console.log(reverseString("javascript é muito legal")); // lagel otium é tpircsavaj

// Questão 6
console.log("Questão 6");

const hasPairWithSum = require("./questao-6/HasPairWithSum");

console.log(hasPairWithSum([1, 2, 3, 9], 8)); // false
console.log(hasPairWithSum([1, 2, 4, 4], 8)); // true

// Questão 7
console.log("Questão 7");

const isPalindrome = require("./questao-7/IsPalindrome");

console.log(isPalindrome("12321")); // true
console.log(isPalindrome("javascript")); // false

// Questão 8
console.log("Questão 8");

const app = require("./questao-8/setup");
const server = app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
    });

const response = fetch("http://localhost:3000/anagrams", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ str1: "listen", str2: "silent" })
});

response.then(res => res.json()).then(data => {
    console.log(data.areAnagrams);
});




