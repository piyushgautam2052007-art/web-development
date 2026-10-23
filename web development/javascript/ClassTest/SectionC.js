// Q15. Fix the Variable Scope Issue

if (true) {
    let message = "Order placed successfully";
}

// console.log(message);

// Answer: ReferenceError

// Explanation:
// message is declared inside the if block using let.
// It cannot be accessed outside that block.


// Corrected Code:

let message;

if (true) {
    message = "Order placed successfully";
}

console.log(message);

// Output: Order placed successfully


// Q16. Fix the Shopping Cart Calculation

function calculateCartTotal(...prices) {
    let total = 0;

    for (let i = 0; i <= prices.length; i++) {
        total += prices[i];
    }

    return total;
}

// console.log(calculateCartTotal(100, 200, 300));

// Original output: NaN

// Explanation:
// The loop uses <= and accesses one extra array index.
// That index contains undefined.
// Adding undefined to a number produces NaN.


// Corrected Code:

function calculateCartTotalCorrect(...prices) {
    let total = 0;

    for (let i = 0; i < prices.length; i++) {
        total += prices[i];
    }

    return total;
}

console.log(calculateCartTotalCorrect(100, 200, 300));

// Output: 600


// Q17. Fix the Object Method

const user = {
    userName: "Rahul",

    showName: () => {
        console.log(this.userName);
    }
};

// user.showName();

// Explanation:
// Arrow functions inherit this from their surrounding context.
// Therefore, this does not refer to the user object here.


// Corrected Code:

const correctUser = {
    userName: "Rahul",

    showName() {
        console.log(this.userName);
    }
};

correctUser.showName();

// Output: Rahul

// Arrow functions are useful for callbacks when you want
// to preserve this from the surrounding context.


// Q18. Type Coercion — Predict the Output

console.log([] + []);
console.log([] + {});
console.log("5" - -"2");
console.log(null + 1);

// Answer:
// ""
// "[object Object]"
// 7
// 1

// Explanation:
// Empty arrays convert to empty strings.
// An ordinary object converts to "[object Object]".
// "5" - -"2" becomes 5 - (-2), which equals 7.
// null converts to 0 in numeric operations.


// Q19. Scope and Hoisting

console.log(a);

var a = 10;

console.log(a);

// Answer:
// undefined
// 10

// Explanation:
// var declarations are hoisted and initialized with undefined.
// The assignment a = 10 happens when execution reaches that line.


// Temporal Dead Zone (TDZ)

// Uncomment these two lines to test the ReferenceError:
// console.log(b);
// let b = 20;

// Explanation:
// let variables cannot be accessed before initialization.
// Accessing b before initialization throws a ReferenceError.