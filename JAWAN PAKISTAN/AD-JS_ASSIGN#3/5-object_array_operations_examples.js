// object_array_operations_examples.js

// ===================================
// 1. Array of Arrays (Nested Destructuring)
// ===================================
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const [[a], [b], [c]] = nestedArray;
console.log("1. a, b, c:", a, b, c);

// ===================================
// 2. Object within an Object
// ===================================
const profile = {
  username: "owais123",
  details: {
    email: "owais@example.com",
    address: "Karachi"
  }
};
const { username, details: { email, address } } = profile;
console.log("2. Username:", username);
console.log("2. Email:", email);
console.log("2. Address:", address);

// ===================================
// 3. Mix of Arrays and Objects
// ===================================
const data = {
  id: 1,
  info: [{ name: "Alice" }, { age: 25 }]
};
const { id, info: [{ name: personName }, { age }] } = data;
console.log("3. ID:", id);
console.log("3. Name:", personName);
console.log("3. Age:", age);

// ===================================
// 4. Array Parameters
// ===================================
function printCoordinates([x, y]) {
  console.log(`4. Coordinates => x: ${x}, y: ${y}`);
}
printCoordinates([10, 20]);
printCoordinates([5, 15]);

// ===================================
// 5. Object Parameters
// ===================================
function displayUser({ name, age }) {
  console.log(`5. User => Name: ${name}, Age: ${age}`);
}
displayUser({ name: "Ali", age: 30 });
displayUser({ name: "Sara", age: 22 });

// ===================================
// 6. List Property Names
// ===================================
const book = { title: "1984", author: "George Orwell", year: 1949 };
const bookKeys = Object.keys(book);
console.log("6. Book Property Names:", bookKeys);

// ===================================
// 7. Count Properties
// ===================================
const student = { name: "Fatima", age: 21, grade: "A", school: "UBIT" };
const numProps = Object.keys(student).length;
console.log("7. Number of Properties:", numProps);

// ===================================
// 8. Iterate Over Keys
// ===================================
const product = { name: "Laptop", price: 50000, category: "Electronics" };
Object.keys(product).forEach(key => {
  console.log(`8. ${key}: ${product[key]}`);
});

// ===================================
// 9. List Property Values
// ===================================
const movie = { title: "Inception", director: "Nolan", year: 2010, genre: "Sci-Fi" };
const movieValues = Object.values(movie);
console.log("9. Movie Property Values:", movieValues);

// ===================================
// 10. Sum Values
// ===================================
const scores = { math: 90, science: 85, english: 88 };
const totalScore = Object.values(scores).reduce((sum, val) => sum + val, 0);
console.log("10. Total Score:", totalScore);

// ===================================
// 11. Iterate Over Values
// ===================================
const user = { username: "owais_01", email: "test@xyz.com", location: "Karachi" };
Object.values(user).forEach(value => {
  console.log("11. User Value:", value);
});

// ===================================
// 12. List Entries
// ===================================
const car = { make: "Toyota", model: "Corolla", year: 2021 };
const carEntries = Object.entries(car);
console.log("12. Car Entries:", carEntries);

// ===================================
// 13. Convert Object to Array
// ===================================
const person = { firstName: "Ahmed", lastName: "Khan", age: 27 };
const personArray = Object.entries(person);
console.log("13. Person as Array:", personArray);

// ===================================
// 14. Iterate Over Entries
// ===================================
const settings = { theme: "dark", notifications: true, privacy: "high" };
Object.entries(settings).forEach(([key, value]) => {
  console.log(`14. ${key}: ${value}`);
});

// ===================================
// 15. Filter Keys (values > 10)
// ===================================
const inventory = { apples: 5, bananas: 12, oranges: 8, grapes: 20 };
const filteredKeys = Object.keys(inventory).filter(key => inventory[key] > 10);
console.log("15. Filtered Keys (value > 10):", filteredKeys);

// ===================================
// 16. Transform Values (C → F)
// ===================================
const temperatures = { morning: 20, afternoon: 30, evening: 25 };
const fahrenheitEntries = Object.entries(temperatures).map(
  ([key, val]) => [key, (val * 9/5) + 32]
);
const fahrenheitObject = Object.fromEntries(fahrenheitEntries);
console.log("16. Temperatures in Fahrenheit:", fahrenheitObject);

// ===================================
// 17. Key-Value Swap
// ===================================
const roles = { admin: "A1", editor: "E1", viewer: "V1" };
const swapped = Object.fromEntries(
  Object.entries(roles).map(([key, val]) => [val, key])
);
console.log("17. Swapped Roles:", swapped);
