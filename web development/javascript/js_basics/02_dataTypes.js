/*
1. primitive data types : string, Number, undefined, null, boolean, symbol, bigint
2. Non-primitives(reference): Array, Object, Function

*/

let userName="anshika"
let score=123

let email
let temperature=null
let isLoggedIn=true

console.log(typeof userName)
console.log(typeof score)
console.log(typeof email)
console.log(typeof temperature)
console.log(typeof isLoggedIn)

let city=["Mathura","Agra","Varansi"]

let userInfo={
    name:"anshika",
    address:"Mathura",
    socialHandle:{
        fb:"https://fb.com",
        insta:"https://insta.com"
    }
}
console.log(obj.name)

function myFunction(){
    console.log("Hello I am Anshika")
}