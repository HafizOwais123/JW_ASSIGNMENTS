// spread_rest_destructuring_examples.js

// ===========================
// 1. Copying an Object
// ===========================
const originalObject = { name: "Ali", age: 25 };
const copiedObject = { ...originalObject };
console.log("1. Copied Object:", copiedObject);
console.log("Same reference?", originalObject === copiedObject);

// ===========================
// 2. Merging Objects
// ===========================
const object1 = { name: "Ali", age: 25 };
const object2 = { age: 30, city: "Karachi" };
const mergedObject = { ...object1, ...object2 };
console.log("2. Merged Object:", mergedObject);

// ===========================
// 3. Updating Object Properties
// ===========================
const user = { name: "Sara", age: 22, email: "sara@example.com" };
const updatedUser = { ...user, email: "newemail@example.com", address: "Lahore" };
console.log("3. Updated User:", updatedUser);

// ===========================
// 4. Passing Array Elements as Arguments
// ===========================
function sum(a, b, c) {
  return a + b + c;
}
const numbers = [5, 10, 15];
console.log("4. Sum:", sum(...numbers));

// ===========================
// 5. Combining Multiple Arrays
// ===========================
function combineArrays(...arrays) {
  return [].concat(...arrays);
}
console.log("5. Combined Arrays:", combineArrays([1, 2], [3, 4], [5]));

// ===========================
// 6. Rest Parameter with Spread
// ===========================
function multiply(multiplier, ...nums) {
  return nums.map(n => n * multiplier);
}
console.log("6. Multiply with Rest:", multiply(2, 3, 4, 5));

// ===========================
// 7. Spread with Nested Structures (Shallow Copy)
// ===========================
const nestedArray = [[1, 2], [3, 4]];
const shallowCopy = [...nestedArray];
shallowCopy[0][0] = 99;
console.log("7. Original Nested Array:", nestedArray);
console.log("7. Modified Shallow Copy:", shallowCopy);

// ===========================
// 8. Sum Function (Rest Parameter)
// ===========================
function totalSum(...args) {
  return args.reduce((sum, n) => sum + n, 0);
}
console.log("8. Total Sum:", totalSum(1, 2, 3, 4));

// ===========================
// 9. Average Function
// ===========================
function average(...args) {
  const sum = args.reduce((s, n) => s + n, 0);
  return args.length ? sum / args.length : 0;
}
console.log("9. Average:", average(10, 20, 30));

// ===========================
// 10. First and Rest
// ===========================
const nums1 = [10, 20, 30, 40, 50];
const [first, ...rest] = nums1;
console.log("10. First:", first);
console.log("10. Rest:", rest);

// ===========================
// 11. Skip and Rest
// ===========================
const colors = ["red", "green", "blue", "yellow", "orange"];
const [, , ...remainingColors] = colors;
console.log("11. Remaining Colors after skip:", remainingColors);

// ===========================
// 12. Basic Destructuring (Object)
// ===========================
const person = { name: "Ahmed", age: 30, email: "ahmed@example.com", address: "Karachi" };
const { name, email, ...restProps } = person;
console.log("12. Name:", name);
console.log("12. Email:", email);
console.log("12. Rest Props:", restProps);

// ===========================
// 13. Nested Destructuring
// ===========================
const student = {
  id: 101,
  name: "Fatima",
  grades: [90, 85, 88],
  info: {
    age: 21,
    major: "CS"
  }
};
const { id, name: studentName, info: { major }, ...remaining } = student;
console.log("13. ID:", id);
console.log("13. Name:", studentName);
console.log("13. Major:", major);
console.log("13. Remaining:", remaining);

// ===========================
// 14. Filter Even Numbers
// ===========================
function filterEven(...args) {
  return args.filter(n => n % 2 === 0);
}
console.log("14. Filtered Evens:", filterEven(1, 2, 3, 4, 5, 6));

// ===========================
// 15. Combine and Sort Arrays
// ===========================
function combineAndSort(...arrays) {
  return [].concat(...arrays).sort((a, b) => a - b);
}
console.log("15. Combined and Sorted:", combineAndSort([5, 2], [9, 1], [3]));

// ===========================
// 16. Basic Destructuring (Array)
// ===========================
const fruits = ["apple", "banana", "cherry"];
const [firstFruit, secondFruit, thirdFruit] = fruits;
console.log("16. Fruits:", firstFruit, secondFruit, thirdFruit);

// ===========================
// 17. Skipping Elements
// ===========================
const colorArr = ["red", "green", "blue", "yellow"];
const [primaryColor, , tertiaryColor] = colorArr;
console.log("17. Primary Color:", primaryColor);
console.log("17. Tertiary Color:", tertiaryColor);

// ===========================
// 18. Rest Operator (Destructuring)
// ===========================
const nums2 = [1, 2, 3, 4, 5];
const [firstNumber, ...remainingNumbers] = nums2;
console.log("18. First Number:", firstNumber);
console.log("18. Remaining Numbers:", remainingNumbers);

// ===========================
// 19. Basic Object Destructuring
// ===========================
const personInfo = { name: "Zain", age: 28, city: "Lahore" };
const { name: n, age: a, city: c } = personInfo;
console.log("19. Name:", n);
console.log("19. Age:", a);
console.log("19. City:", c);

// ===========================
// 20. Renaming Variables
// ===========================
const car = { make: "Toyota", model: "Corolla", year: 2020 };
const { make: carMake, model: carModel, year: carYear } = car;
console.log("20. Car Make:", carMake);
console.log("20. Car Model:", carModel);
console.log("20. Car Year:", carYear);

// ===========================
// 21. Default Values
// ===========================
const settings = { theme: "dark" };
const { theme, language = "English" } = settings;
console.log("21. Theme:", theme);
console.log("21. Language:", language);
