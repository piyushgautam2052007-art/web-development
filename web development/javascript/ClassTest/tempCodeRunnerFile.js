function addNumbers(...numbers) {
    return numbers.length;
}

const values = [10, 20, 30, 40];

console.log(addNumbers(values));
console.log(addNumbers(...values));