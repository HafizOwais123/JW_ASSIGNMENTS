// array_hof_callback_examples.js

// 1. Filter and Map
const numbers = [1,2,3,4,5,6,7,8,9,10];
function filterAndMap(arr, filterFn, mapFn) {
  return arr.filter(filterFn).map(mapFn);
}
const result1 = filterAndMap(numbers, n => n % 2 !== 0, n => n * n);
console.log("1. Odd Numbers Squared:", result1);

// 2. Sort and Reduce
const words = ["apple", "banana", "cherry", "date"];
function sortAndReduce(arr, sortFn, reduceFn) {
  return arr.sort(sortFn).reduce(reduceFn);
}
const result2 = sortAndReduce(words, (a, b) => a.localeCompare(b), (acc, word) => acc + " " + word);
console.log("2. Sorted and Concatenated:", result2.trim());

// 3. Simple Callback
function greet(name, callback) {
  const message = `Hello, ${name}!`;
  callback(message);
}
function printGreeting(msg) {
  console.log("3. Callback Greeting:", msg);
}
greet("Owais", printGreeting);

// 4. Asynchronous Callback
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "Sample Data" };
    callback(data);
  }, 1000);
}
function displayData(data) {
  console.log("4. Fetched Data:", data);
}
fetchData(displayData);

// 5. Simple Arrow Function
const add = (a, b) => a + b;
console.log("5. Add (3 + 5):", add(3, 5));

// 6. Arrow Function with Array Methods
const squared = [1, 2, 3, 4, 5].map(n => n * n);
console.log("6. Squared Numbers:", squared);

// 7. Variable Scope
function outer() {
  const x = 10;
  function inner() {
    console.log("7. Inner x:", x);
  }
  inner();
}
outer();

// 8. Closure
function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log("8. Counter:", count);
  };
}
const counter1 = createCounter();
const counter2 = createCounter();
counter1();
counter1();
counter2();

// 9. Default Parameters
function greetUser(name, greeting = "Hello") {
  console.log(`9. ${greeting}, ${name}!`);
}
greetUser("Ali");
greetUser("Fatima", "Hi");

// 10. Default Parameters with Others
function calculateArea(width = 10, height = 5) {
  return width * height;
}
console.log("10. Area:", calculateArea());
console.log("10. Area:", calculateArea(7, 4));

// 11. Square Numbers
const numsSquared = [1, 2, 3, 4, 5].map(n => n * n);
console.log("11. Squared:", numsSquared);

// 12. Convert to Uppercase
const upperWords = ["apple", "banana", "cherry"].map(word => word.toUpperCase());
console.log("12. Uppercase:", upperWords);

// 13. Filter Even Numbers
const evens = [1,2,3,4,5,6,7,8,9,10].filter(n => n % 2 === 0);
console.log("13. Even Numbers:", evens);

// 14. Filter Long Words
const longWords = ["apple", "banana", "cherry", "date"].filter(word => word.length > 5);
console.log("14. Long Words (>5):", longWords);

// 15. Log Numbers
[1, 2, 3, 4, 5].forEach(num => console.log("15. Number:", num));

// 16. Log Word Lengths
["apple", "banana", "cherry"].forEach(word => console.log(`16. ${word} Length:`, word.length));

// 17. Sum of Numbers
const total = [1, 2, 3, 4, 5].reduce((acc, val) => acc + val, 0);
console.log("17. Sum:", total);

// 18. Concatenate Strings
const sentence = ["Hello", "world", "this", "is", "JavaScript"].reduce((acc, word) => acc + " " + word);
console.log("18. Sentence:", sentence);

// 19. Check for Even Number
const hasEven = [1, 3, 5, 7, 8].some(n => n % 2 === 0);
console.log("19. Has Even:", hasEven);

// 20. Check for Long Word
const hasLongWord = ["apple", "banana", "cherry", "date"].some(word => word.length > 5);
console.log("20. Has Long Word (>5):", hasLongWord);

// 21. Check All Even Numbers
const allEven = [2, 4, 6, 8, 10].every(n => n % 2 === 0);
console.log("21. All Even:", allEven);

// 22. Check All Long Words
const allLong = ["elephant", "giraffe", "hippopotamus"].every(word => word.length > 5);
console.log("22. All Words >5:", allLong);

// 23. Find First Even Number
const firstEven = [1, 3, 5, 7, 8].find(n => n % 2 === 0);
console.log("23. First Even:", firstEven);

// 24. Find Long Word
const firstLongWord = ["apple", "banana", "cherry", "date"].find(word => word.length > 5);
console.log("24. First Long Word:", firstLongWord);

// 25. Find Index of First Even Number
const firstEvenIndex = [1, 3, 5, 7, 8].findIndex(n => n % 2 === 0);
console.log("25. Index of First Even:", firstEvenIndex);

// 26. Find Index of Long Word
const longWordIndex = ["apple", "banana", "cherry", "date"].findIndex(word => word.length > 5);
console.log("26. Index of First Long Word:", longWordIndex);
