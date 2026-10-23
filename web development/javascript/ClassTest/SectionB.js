// Q9. Operators and Type Coercion

console.log("5" + 2);
console.log("5" - 2);
console.log(true + 2);
console.log(Boolean("false"));

// Answer:
// 52
// 3
// 3
// true

// Explanation:
// "5" + 2 joins the string and number.
// "5" - 2 converts the string to a number.
// true becomes 1, so 1 + 2 = 3.
// "false" is a non-empty string, so Boolean("false") is true.


// Q10. Scope and Variable Declarations

var amount = 100;

function calculate() {
    var amount = 200;
    let discount = 20;

    if (true) {
        var amount = 300;
        let discount = 50;

        console.log(amount, discount);
    }

    console.log(amount, discount);
}

calculate();
console.log(amount);

// Answer:
// 300 50
// 300 20
// 100

// Explanation:
// var is function-scoped, so amount becomes 300 inside calculate().
// The inner discount is block-scoped and has the value 50.
// Outside the if block, discount is 20.
// The global amount remains 100.


// Q11. Functions and Return Values

function calculatePrice(price, quantity) {
    console.log(price * quantity);
}

const result = calculatePrice(100, 3);
console.log(result);

// Answer:
// 300
// undefined

// Explanation:
// console.log() displays the calculated price.
// The function does not return a value, so result is undefined.


// Corrected function:

function calculatePriceCorrect(price, quantity) {
    return price * quantity;
}

const finalResult = calculatePriceCorrect(100, 3);
console.log(finalResult);

// Output: 300


// Q12. Array Mutation

const products = ["Milk", "Bread", "Rice"];

products[1] = "Eggs";
products.push("Oil");

console.log(products);
console.log(products.length);

// Answer:
// ["Milk", "Eggs", "Rice", "Oil"]
// 4

// Explanation:
// products[1] replaces Bread with Eggs.
// push() adds Oil to the array.
// const prevents reassignment, not modification of array contents.


// Q13. Object Methods and this

const employee = {
    name: "Aman",
    salary: 30000,

    showDetails() {
        console.log(this.name, this.salary);
    }
};

employee.showDetails();

// Answer: Aman 30000

// Explanation:
// During employee.showDetails(), this refers to employee.
// Therefore, this.name is Aman and this.salary is 30000.


// Q14. Rest Parameters and Spread Syntax

function addNumbers(...numbers) {
    return numbers.length;
}

const values = [10, 20, 30, 40];

console.log(addNumbers(values));
console.log(addNumbers(...values));

// Answer:
// 1
// 4

// Explanation:
// addNumbers(values) passes the entire array as one argument.
// addNumbers(...values) expands the array into four arguments.
// The rest parameter collects the arguments into an array.