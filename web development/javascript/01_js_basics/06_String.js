let string1="hello123"
string1=new String('I am string 1')

string2=new String('I am string 2')

string1="new string"
console.log(string1)

console.log(string2.trim()) //

console.log(string1.length)

console.log(string1.indexOf('str'))

console.log(string1.slice(0, 4))

string1.toUpperCase()
string1.toLowerCase()

console.log(string1.toUpperCase()) //it will not change the original string
console.log(string1)

console.log(string1.includes('ng'))

let backendUrl= "https:// mystore.com"
console.log("My backend is running on: " + backendUrl)

console.log(`My backend is running on: ${backendUrl}`) 

const url="https://mystore?user=anshika+singh"

console.log(url.replace('+','_')) //replace is used to replace the first matching text