// Q1. What will be the output?

console.log(typeof null);
console.log(typeof NaN);
console.log(typeof []);

// A. null, number, array
// B. object, number, object
// C. object, NaN, array
// D. undefined, number, object

// Answer: B. object, number, object

// Explanation:
// typeof null returns "object" due to historical JavaScript behavior.
// typeof NaN returns "number" because NaN is a special numeric value.
// typeof [] returns "object" because arrays are objects in JavaScript.


// Q2. Predict the output.

console.log(2 + "203");
console.log(403 - "203");
console.log(2 * "12abc");

// A. 205, 200, 24
// B. 205, 200, NaN
// C. NaN, 200, NaN
// D. 2203, 403203, 24

// Answer: 2203, 200, NaN
// Note: None of the given options is completely correct.

// Explanation:
// + joins the number and string, producing "2203".
// - converts "203" to a number, producing 200.
// "12abc" cannot be converted to a valid number, so the result is NaN.


// Q3. Which statement about let, const, and var is correct?

// A. var is block-scoped.
// B. let can be redeclared in the same scope without error.
// C. A const object cannot have its properties modified.
// D. let and const are block-scoped, while var is function-scoped.

// Answer: D

// Explanation:
// var is function-scoped.
// let and const are block-scoped.
// A const object can have its properties modified,
// but the variable cannot be reassigned.


// Q4. What is the output?

let score = 12;

if (score > 10) {
    var result = "Pass";
    let status = "Eligible";
}

console.log(result);
// console.log(status);

// A. Pass, Eligible
// B. Pass, followed by a ReferenceError
// C. ReferenceError, ReferenceError
// D. undefined, undefined

// Answer: B

// Explanation:
// result is declared with var and is accessible outside the if block.
// status is declared with let and is accessible only inside the if block.
// Uncomment console.log(status) to see the ReferenceError.


// Q5. Which loop is most suitable for iterating over array values?

// A. for...in
// B. for...of
// C. if...else
// D. switch

// Answer: B. for...of

// Explanation:
// for...of iterates over the values of an array.


// Q6. What is the difference between return and console.log()?

// A. Both return values to the caller.
// B. console.log() returns the calculated result.
// C. return sends a value back to the caller; console.log() displays a value.
// D. return can only be used in arrow functions.

// Answer: C

// Explanation:
// return sends a value back from a function.
// console.log() displays a value in the console.



// Q7. What does the rest parameter do?

// A. Converts all arguments into a string.
// B. Collects the arguments into an array.
// C. Expands an existing array into arguments.
// D. Allows only one argument.

// Answer: B

// Explanation:
// The rest parameter collects multiple arguments into an array.


// Q8. Which statement about arrow functions and this is correct?

// A. Arrow functions always bind this to the calling object.
// B. Regular functions always bind this to the object in which they are defined.
// C. Arrow functions inherit this from their surrounding lexical context.
// D. Arrow functions cannot access object properties.

// Answer: C

// Explanation:
// Arrow functions do not have their own this.
// They inherit this from their surrounding lexical context.

