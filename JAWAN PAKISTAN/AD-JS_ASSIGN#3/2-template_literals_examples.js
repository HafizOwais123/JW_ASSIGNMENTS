// templateLiteralsDemo.js

// ===========================
// 1. String Interpolation
// ===========================
const firstName = "Hafiz";
const lastName = "Owais";
// Using template literal to interpolate first and last name
const fullName = `${firstName} ${lastName}`;
console.log("1. Full Name:", fullName);

// ===========================
// 2. Multi-line Strings
// ===========================
const address = `House #12,
Street #7,
Karachi, Pakistan.`;
console.log("\n2. Address (Multi-line):\n" + address);

// ===========================
// 3. Simple Expressions
// ===========================
const num1 = 10;
const num2 = 20;
const sum = `${num1} + ${num2} = ${num1 + num2}`;
console.log("\n3. Simple Expression:", sum);

// ===========================
// 4. Function Calls
// ===========================
function multiply(a, b) {
  return a * b;
}
const productString = `The product of ${num1} and ${num2} is ${multiply(num1, num2)}`;
console.log("\n4. Function Call:", productString);

// ===========================
// 5. Creating a Tagged Template
// ===========================
function logTemplate(strings, ...values) {
  console.log("\n5. Tagged Template Output:");
  console.log("Strings:", strings);
  console.log("Values:", values);
}
const name = "Ali";
logTemplate`Hello, ${name}! Welcome to JavaScript.`;

// ===========================
// 6. Formatting using Tagged Template
// ===========================
function upper(strings, ...values) {
  return strings.map((str, i) =>
    str + (values[i] ? String(values[i]).toUpperCase() : "")
  ).join('');
}
const city = "karachi";
const formatted = upper`Welcome to ${city}, the city of lights.`;
console.log("\n6. Formatted String:", formatted);

// ===========================
// 7. Conditional Logic in Template Literal
// ===========================
const hour = new Date().getHours();
const greeting = `Good ${hour < 12 ? "Morning" : "Afternoon"}, the time is ${hour}:00`;
console.log("\n7. Conditional Greeting:", greeting);

// ===========================
// 8. Loops within Template Literals (HTML list)
// ===========================
const shoppingList = ["Milk", "Eggs", "Bread", "Butter"];
const htmlList = `
8. Shopping List as HTML:
<ul>
  ${shoppingList.map(item => `<li>${item}</li>`).join('\n  ')}
</ul>`;
console.log(htmlList);

// ===========================
// 9. Escaping Backticks
// ===========================
const stringWithBacktick = `This string contains a backtick character: \``;
console.log("\n9. Escaping Backtick:", stringWithBacktick);

// ===========================
// 10. Nested Template Literals
// ===========================
const tableData = [
  ["Name", "Age", "City"],
  ["Ali", 25, "Karachi"],
  ["Sara", 22, "Lahore"]
];
const htmlTable = `
10. Nested HTML Table:
<table border="1">
  ${tableData.map(row => `
    <tr>
      ${row.map(cell => `<td>${cell}</td>`).join('')}
    </tr>
  `).join('')}
</table>`;
console.log(htmlTable);
