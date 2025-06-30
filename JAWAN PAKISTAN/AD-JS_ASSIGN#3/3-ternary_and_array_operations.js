// ternary_and_array_operations.js

// ====================================
// 1. Simple Condition
// ====================================
const age = 20;
const canVote = age >= 18 ? "Yes" : "No";
console.log("1. Can Vote:", canVote);

// ====================================
// 2. Even or Odd
// ====================================
const number = 7;
const evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
console.log("2. Even or Odd:", evenOrOdd);

// ====================================
// 3. Grade Evaluation
// ====================================
const score = 85;
const grade =
  score >= 90 ? "A" :
  score >= 80 ? "B" :
  score >= 70 ? "C" :
  score >= 60 ? "D" : "F";
console.log("3. Grade:", grade);

// ====================================
// 4. Login Status
// ====================================
const isLoggedIn = true;
const statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";
console.log("4. Login Status:", statusMessage);

// ====================================
// 5. Discount Eligibility
// ====================================
const isMember = true;
const purchaseAmount = 150;
const discount = (isMember && purchaseAmount > 100) ? purchaseAmount * 0.10 : 0;
console.log("5. Discount:", discount);

// ====================================
// 6. Determine Max Value
// ====================================
function maxValue(a, b) {
  return a > b ? a : b;
}
console.log("6. Max Value:", maxValue(45, 60));

// ====================================
// 7. Greeting Message
// ====================================
function greet(name) {
  return name && name.trim() !== "" ? `Hello, ${name}!` : "Hello, guest!";
}
console.log("7. Greet with name:", greet("Owais"));
console.log("7. Greet without name:", greet(""));

// ====================================
// 8. Mapping Values (Double if even, Triple if odd)
// ====================================
const nums = [1, 2, 3, 4, 5];
const mappedNums = nums.map(n => n % 2 === 0 ? n * 2 : n * 3);
console.log("8. Mapped Array (Even×2, Odd×3):", mappedNums);

// ====================================
// 9. Filtering Values (length > 3)
// ====================================
const words = ["cat", "dog", "lion", "elephant", "go"];
const filteredWords = words.filter(word => word.length > 3);
console.log("9. Filtered Words (length > 3):", filteredWords);

// ====================================
// 10. Copying an Array
// ====================================
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log("10. Original Array:", originalArray);
console.log("10. Copied Array:", copiedArray);
console.log("10. Same reference?", originalArray === copiedArray); // false

// ====================================
// 11. Merging Arrays
// ====================================
const array1 = [10, 20];
const array2 = [30, 40];
const mergedArray = [...array1, ...array2];
console.log("11. Merged Array:", mergedArray);

// ====================================
// 12. Adding Elements to an Array
// ====================================
const numbers = [2, 4, 6];
const updatedNumbers = [1, ...numbers, 8];
console.log("12. Updated Array:", updatedNumbers);
