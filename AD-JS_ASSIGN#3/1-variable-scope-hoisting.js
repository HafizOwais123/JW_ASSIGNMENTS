// ======================
// Global Scope
// ======================

var globalVar = "I am var";    //  Accessible globally and added to global object
let globalLet = "I am let";    //  Accessible globally (not attached to global object)
const globalConst = "I am const"; //  Accessible globally (not attached to global object)

console.log(globalVar);    // I am var
console.log(globalLet);    // I am let
console.log(globalConst);  // I am const

// ======================
// Function Scope
// ======================

function testFunctionScope() {
    var functionVar = "var inside function";
    let functionLet = "let inside function";
    const functionConst = "const inside function";
}

testFunctionScope();

try {
    console.log(functionVar); //  ReferenceError: functionVar is not defined
} catch (e) {
    console.log(e.message);
}
try {
    console.log(functionLet); //  ReferenceError
} catch (e) {
    console.log(e.message);
}
try {
    console.log(functionConst); //  ReferenceError
} catch (e) {
    console.log(e.message);
}

// All are not accessible outside the function – function-scoped

// ======================
// Block Scope
// ======================

if (true) {
    var blockVar = "var inside block";
    let blockLet = "let inside block";
    const blockConst = "const inside block";
}

console.log(blockVar); //  Accessible – var is not block scoped
try {
    console.log(blockLet); //  ReferenceError
} catch (e) {
    console.log(e.message);
}
try {
    console.log(blockConst); //  ReferenceError
} catch (e) {
    console.log(e.message);
}

// ======================
// Hoisting with var
// ======================

console.log(hoistedVar); //  undefined due to hoisting
var hoistedVar = "Now it's defined";

// ======================
// Hoisting with let and const
// ======================

try {
    console.log(hoistedLet); //  ReferenceError: Cannot access 'hoistedLet' before initialization
} catch (e) {
    console.log(e.message);
}
let hoistedLet = "I’m let";

try {
    console.log(hoistedConst); //  ReferenceError
} catch (e) {
    console.log(e.message);
}
const hoistedConst = "I’m const";

// ======================
// Re-declaration
// ======================

var redeclareVar = "first";
var redeclareVar = "second"; //  Allowed
console.log(redeclareVar); // second

let redeclareLet = "first";
try {
    let redeclareLet = "second"; //  SyntaxError in same scope
} catch (e) {
    console.log("Cannot redeclare let in same scope:", e.message);
}

const redeclareConst = "first";
try {
    const redeclareConst = "second"; //  SyntaxError
} catch (e) {
    console.log("Cannot redeclare const in same scope:", e.message);
}

// ======================
// Re-assignment
// ======================

var reassignVar = "var value";
reassignVar = "new var value"; //  Allowed
console.log(reassignVar);

let reassignLet = "let value";
reassignLet = "new let value"; //  Allowed
console.log(reassignLet);

const reassignConst = "const value";
try {
    reassignConst = "new const value"; //  TypeError
} catch (e) {
    console.log("Cannot reassign const:", e.message);
}

// ======================
// Temporal Dead Zone (TDZ)
// ======================

{
    try {
        console.log(tdzLet); //  ReferenceError
    } catch (e) {
        console.log("TDZ for let:", e.message);
    }
    let tdzLet = "TDZ let";

    try {
        console.log(tdzConst); //  ReferenceError
    } catch (e) {
        console.log("TDZ for const:", e.message);
    }
    const tdzConst = "TDZ const";
}

// ======================
// When to use var, let, and const
// ======================

//  Use var when you need function-scoped variables (legacy or specific reason)
function oldFunction() {
    if (true) {
        var count = 10;
    }
    console.log("Using var:", count); // 10
}
oldFunction();

//  Use let for variables that will be reassigned
let score = 0;
score = 100;
console.log("Using let:", score);

//  Use const for values that should never change
const PI = 3.14159;
console.log("Using const:", PI);
// PI = 3.14; //  TypeError if attempted

