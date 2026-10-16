// let category="Action"
 
// switch(category){
//     case "Action":
//         console.log("This is an action movie.");
//         break;
//     case "Comedy":
//         console.log("This is a comedy movie.");
//         break;
//     case "Drama":
//         console.log("This is a drama movie.");
//         break;
//     default:
//         console.log("no category is selected.");
// }
//  let i=0;
//  for(let i=2;i<10;i++){
//     console.log("this is inside block console",i)
//  }

//  console.log("this is outside the block console",i)

let branch =["cse","ece","it"]
branch.newbranch="aiml"
for(const b in branch){
    console.log(b);//it iterates ovdr object values
}
for(const b of branch){
    console.log(b);//it iterates over object keys
}